import React, { useEffect } from 'react'
import { useImmer } from 'use-immer'
import ip from 'ip'
import PQueue from 'p-queue'
import BigNumber from 'bignumber.js'
import useLotusClient from '../lib/use-lotus-client'
// import useMiners from '../lib/use-miners-all'
import useMiners from '../lib/use-miners'

const concurrency = 8

function formatSectorSize (size) {
  switch (size) {
    case 536870912:
      return '512M'
    case 34359738368:
      return '32G'
    case 2048:
      return '2K'
    default:
      return size
  }
}

function GeoName({ geo }) {
  if (!geo) return null
  return (<span>
    {' '} {geo.country && geo.country.names && geo.country.names.en}
    {' '} {geo.city && geo.city.names && geo.city.names.en}
  </span>)
}
export default function StatePowerMiners ({ appState }) {
  const { selectedNode } = appState
  const client = useLotusClient(selectedNode, 'node')
  const [miners, annotations] = useMiners(client)
  const [minerPower, updateMinerPower] = useImmer({})
  const [minerInfo, updateMinerInfo] = useImmer({})
  const sortedMiners =
    miners &&
    [...miners].sort((a, b) => {
      if (minerPower[a] && !minerPower[b]) return -1
      if (minerPower[b] && !minerPower[a]) return 1
      if (minerPower[a] && minerPower[b]) {
        /*
        const powerA = BigInt(minerPower[a].QualityAdjPower)
        const powerB = BigInt(minerPower[b].QualityAdjPower)
        */
        const powerA = BigNumber(minerPower[a].QualityAdjPower)
        const powerB = BigNumber(minerPower[b].QualityAdjPower)
        const compare = powerB.minus(powerA)
        if (compare.isPositive()) return 1
        if (compare.isNegative()) return -1
      }
      return Number(a.slice(1)) - Number(b.slice(1))
    })

  useEffect(() => {
    let state = { canceled: false }
    if (!miners) return
    ;(async function run () {
      if (state.canceled) return
      for (const miner of miners) {
        const result = await client.stateMinerPower(miner, [])
        if (state.canceled) return
        updateMinerPower(draft => {
          draft[miner] = result.MinerPower
          draft['total'] = result.TotalPower
        })
        const minerInfo = await client.stateMinerInfo(miner, [])
        const { PeerId: peerId, SectorSize: sectorSize } = minerInfo
        if (state.canceled) return
        updateMinerInfo(draft => {
          if (!draft[miner]) {
            draft[miner] = {}
          }
          const minerData = draft[miner]
          minerData.sectorSize = sectorSize
          minerData.peerId = peerId
        })
      }
    })()
    return () => {
      state.canceled = true
    }
  }, [client, miners, updateMinerPower, updateMinerInfo])

  useEffect(() => {
    let state = { canceled: false }
    if (!miners) return
    async function run () {
      if (state.canceled) return
      const queue = new PQueue({ concurrency })
      for (const miner of miners) {
        queue.add(async () => {
          const minerInfo = await client.stateMinerInfo(miner, [])
          const { PeerId: peerId, SectorSize: sectorSize } = minerInfo
          if (state.canceled) return
          updateMinerInfo(draft => {
            if (!draft[miner]) {
              draft[miner] = {}
            }
            const minerData = draft[miner]
            minerData.sectorSize = sectorSize
            minerData.peerId = peerId
            minerData.addrsLoading = true
          })
          const ips = new Set()
          let addrsError
          try {
            console.log('Find peers', miner, peerId)
            const findPeer = await client.netFindPeer(peerId)
            console.log('Jim findPeer', miner, peerId, findPeer)
            for (const maddr of findPeer.Addrs) {
              console.log(`  ${maddr}`)
              const match = maddr.match(/^\/ip4\/(\d+\.\d+\.\d+\.\d+)/)
              if (match) {
                const ipv4Address = match[1]
                if (!ip.isPrivate(ipv4Address)) {
                  console.log(`    ${ipv4Address}`)
                  ips.add(ipv4Address)
                }
              }
            }
          } catch (e) {
            console.warn('Exception finding peer', miner, e.message)
            addrsError = e.message
          }
          const geoIp = {}
          for (const ipAddr of ips) {
            try {
              const url = `http://127.0.0.1:3003/ipv4/${ipAddr}`
              const response = await fetch(url)
              geoIp[ipAddr] = await response.json()
            } catch (e) {
              console.error(`GeoIP error`, e)
            }
          }
          updateMinerInfo(draft => {
            const minerData = draft[miner]
            minerData.addrs = []
            for (const ipAddr of ips) {
              console.log('geoip', ipAddr, geoIp[ipAddr])
              minerData.addrs.push({
                ip: ipAddr,
                geo: geoIp[ipAddr]
              })
            }
            if (addrsError) {
              minerData.addrsError = addrsError
            }
            delete minerData.addrsLoading
          })
        })
      }
    }
    run()
    return () => {
      state.canceled = true
    }
  }, [client, miners, updateMinerInfo])

  return (
    <div>
      <table className='minerPower'>
        <tbody>
          {sortedMiners &&
            sortedMiners.map(miner => (
              <React.Fragment key={miner}>
                <tr>
                  <td>
                    <a
                      href={`https://filscan.io/#/address/detail?address=${miner}`}
                    >
                      {miner}
                    </a>
                  </td>
                  <td>
                    {minerInfo[miner] && (
                      <span>
                        {' '}
                        {formatSectorSize(minerInfo[miner].sectorSize)}
                      </span>
                    )}
                  </td>
                  <td>
                    {minerPower[miner] && minerPower[miner].QualityAdjPower}
                  </td>
                  <td>{annotations[miner] && annotations[miner]}</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {minerInfo[miner] && minerInfo[miner].peerId && (
                      <a
                        href={`https://filscan.io/#/stats/peer?peer_id=${minerInfo[miner].peerId}`}
                      >
                        {minerInfo[miner].peerId.slice(-3)}
                      </a>
                    )}
                  </td>
                  <td colSpan='2'>
                    {minerInfo[miner] && minerInfo[miner].addrs && (
                      <ul>
                        {minerInfo[miner].addrs.map((addr, i) => (
                          <li key={i}>
                            {addr.ip}
                            <GeoName geo={addr.geo} />
                          </li>
                        ))}
                      </ul>
                    )}
                    {minerInfo[miner] &&
                      minerInfo[miner].addrs &&
                      minerInfo[miner].addrs.length === 0 && (
                        <ul>
                          <li>
                            {minerInfo[miner].addrsError
                              ? minerInfo[miner].addrsError
                              : 'No IPv4 addresses found'}
                          </li>
                        </ul>
                      )}
                    {minerInfo[miner] && !minerInfo[miner].addrs && (
                      <ul>
                        <li>
                          {minerInfo[miner].addrsLoading
                            ? 'Finding IPs...'
                            : 'Pending IP lookup'}
                        </li>
                      </ul>
                    )}
                  </td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  )
}
