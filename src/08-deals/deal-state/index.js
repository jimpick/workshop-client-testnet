import React, { useEffect, useState, useRef } from 'react'
import { format, formatDistance } from 'date-fns'
import copy from 'clipboard-copy'
import useLotusClient from '../../lib/use-lotus-client'
import annotations from '../../annotations.js'

const dealStateNames = [
  // go-fil-markets/storagemarket/dealstatus.go
  'Unknown', // 0
  'ProposalNotFound', // 1
  'ProposalRejected', // 2
  'ProposalAccepted', // 3
  'Staged', // 4
  'Sealing', // 5
  'RecordPiece', // 6
  'Active', // 7
  'Expired', // 8
  'Slashed', // 9
  'Rejecting', // 10
  'Failing', // 11
  'FundsEnsured', // 12
  'StorageDealCheckForAcceptance', // 13
  'Validating', // 14
  'AcceptWait', // 15
  'StartDataTransfer', // 16
  'Transferring', // 17
  'WaitingForData', // 18
  'VerifyData', // 19
  'EnsureProviderFunds', // 20
  'EnsureClientFunds', // 21
  'ProviderFunding', // 22
  'ClientFunding', // 23
  'Publish', // 24
  'Publishing', // 25
  'Error' // 26
]

function DealHistory ({ dealHistoryData, height }) {
  if (!dealHistoryData || !height) return null
  const now = Date.now()

  return (
    <table style={{ fontSize: '70%' }}>
      <tbody>
        {dealHistoryData.map((record, i) => {
          return (
            <tr key={i}>
              <td>{dealStateNames[record[0]]}</td>
              <td>{blocks(i)}</td>
              <td>{timeElapsed(i)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  function blocks (i) {
    const start = dealHistoryData[i][1]
    const end =
      i < dealHistoryData.length - 1 ? dealHistoryData[i + 1][1] : height
    return `${start} (${end - start} blocks)`
  }

  function timeElapsed (i) {
    const start = dealHistoryData[i][2]
    const end = i < dealHistoryData.length - 1 ? dealHistoryData[i + 1][2] : now
    return (
      `${format(start, 'kk:mm:ss')} ` +
      `(${formatDistance(start, end, { includeSeconds: true })})`
    )
  }
}

const buckets = [
  'active',
  'active-sealing',
  'sealing',
  'stuck',
  'busy',
  'new',
  'min-size',
  'min-ask',
  'error',
  'backoff',
  'rejected',
  'dial',
  'xnr',
  'unknown'
]
const bucketSet = new Set(buckets)

function proposedNewBucket (deal, previous, dealData, dealHistory) {
  const { proposalCid, fromNode, miner, date, cid: cidDeal } = deal
  const data = dealData && dealData[proposalCid]
  const clientDealStatus = data && data.clientDealStatus
  // const dealState = clientDealStatus && clientDealStatus.State
  const dealMessage = clientDealStatus && clientDealStatus.Message.replace(/\n/g, '')
  const dealHistoryData = dealHistory && dealHistory[proposalCid]
  const lastHistory =
    dealHistoryData && dealHistoryData[dealHistoryData.length - 1]
  const lastDealState = lastHistory && dealStateNames[lastHistory[0]]
  const now = Date.now()
  let elapsed = ''
  let elapsedNow = ''
  if (lastHistory && dealHistoryData.length > 0) {
    elapsedNow = timeElapsed(dealHistoryData.length - 1)
  }
  if (lastHistory && dealHistoryData.length > 1) {
    elapsed = timeElapsed(dealHistoryData.length - 2)
  }
  if (previous === 'active') {
    if (lastDealState === 'Sealing') {
      return ['active-sealing', '']
    }
  }
  if (previous === 'active-sealing') {
    if (lastDealState === 'Sealing') {
      // return ['sealing', ''] // final
      return ['active-sealing', ''] // in-flight
    }
  }
  if (lastDealState === 'Sealing') {
    return ['sealing', '']
  }
  if (lastDealState === 'Active') {
    return ['active', elapsed]
  }
  if (lastDealState === 'Transferring') {
    return ['stuck', `xfr: ${elapsedNow}`]
  }
  if (lastDealState === 'StorageDealCheckForAcceptance') {
    return ['stuck', `cfa: ${elapsedNow}`]
  }
  if (lastDealState === 'FundsEnsured') {
    return ['stuck', `funds: ${elapsedNow}`]
  }
  if (lastDealState === 'Error') {
    const matchBusy = dealMessage.match(/deal rejected: (cannot seal a sector before .*)/)
    if (matchBusy) {
      return ['busy', matchBusy[1].trim()]
    }
    if (/Provider message: deal rejected: false/.test(dealMessage)) {
      return ['rejected', '']
    }
    if (/miner is not considering online storage deals/.test(dealMessage)) {
      return ['rejected', 'no online']
    }
    if (/Provider message: deal rejected: false/.test(dealMessage)) {
      return ['rejected', '']
    }
    const matchRejected = dealMessage.match(/deal rejected: (.*)/)
    if (matchRejected) {
      return ['rejected', matchRejected[1].trim()]
    }
    const matchDial = dealMessage.match(/all dials failed (.*)/)
    if (matchDial) {
      return ['dial', matchDial[1].trim()]
    }
    if (/err: routing: not found/.test(dealMessage)) {
      return ['xnr', '']
    }
    const matchMinAsk = dealMessage.match(/storage price per epoch less than asking price (.*)/)
    if (matchMinAsk) {
      return ['min-ask', matchMinAsk[1].trim()]
    }
    if (/dial backoff/.test(dealMessage)) {
      return ['backoff', '']
    }
    const matchErrorProvider = dealMessage.match(/Provider message: (.*)/)
    if (matchErrorProvider) {
      return ['error', matchErrorProvider[1].trim()]
    }
    const matchErrorResponse = dealMessage.match(/error reading Response message: (.*)/)
    if (matchErrorResponse) {
      return ['error', matchErrorResponse[1].trim()]
    }
    const matchErrorAddPiece = dealMessage.match(/(AddPiece failed: .*)/)
    if (matchErrorAddPiece) {
      return ['error', matchErrorAddPiece[1].trim()]
    }
    return ['error', dealMessage.trim()]
  }
  return ['unknown', '']

  function timeElapsed (i) {
    const start = dealHistoryData[i][2]
    const end = i < dealHistoryData.length - 1 ? dealHistoryData[i + 1][2] : now
    return formatDistance(start, end, { includeSeconds: true })
  }
}

function bucketizeDeal (deal, dealData, dealHistory) {
  const miner = deal.miner
  const annotation = annotations[miner]
  const match1 = annotation && annotation.match(/^([^,]*), (.*)/)
  if (!match1) {
    const [newBucket, comment] = proposedNewBucket(
      deal,
      'unknown',
      dealData,
      dealHistory
    )
    return ['unknown', newBucket, annotation, comment]
  }
  const bucket = match1[1]
  const annotation1 = match1[2]

  // console.log('Jim bucketize', miner, bucket, annotation1)

  if (bucketSet.has(bucket)) {
    const [newBucket, comment] = proposedNewBucket(
      deal,
      bucket,
      dealData,
      dealHistory
    )
    return [bucket, newBucket, annotation1, comment]
  } else {
    const [newBucket, comment] = proposedNewBucket(
      deal,
      'unknown',
      dealData,
      dealHistory
    )
    return ['unknown', newBucket, annotation1, comment]
  }
}

function BucketDealList ({
  bucket,
  deals,
  dealData,
  dealHistory,
  height,
  now
}) {
  const minerEntries = []
  const toAnnotationsMap = {}
  for (let i in deals) {
    const deal = deals[i]
    const { proposalCid, fromNode, miner, date, cid: cidDeal } = deal
    const [fromTag, toTag, shortAnnotation, comment] = bucketizeDeal(
      deal,
      dealData,
      dealHistory
    )
    if (toTag === bucket) {
      if (!toAnnotationsMap[miner] || toAnnotationsMap[miner].date < date) {
        toAnnotationsMap[miner] = { shortAnnotation, comment, date }
      }
    }
    if (fromTag !== bucket) continue

    const data = dealData && dealData[proposalCid]
    const clientDealStatus = data && data.clientDealStatus
    // const dealState = clientDealStatus && clientDealStatus.State
    const dealMessage = clientDealStatus && clientDealStatus.Message
    const dealHistoryData = dealHistory && dealHistory[proposalCid]
    // if (filterErrors && dealState === 22) return null
    const retrieveScript =
      clientDealStatus &&
      dealStateNames[clientDealStatus.State] === 'Active' &&
      `(TIMESTAMP=\`date +%s\`; /usr/bin/time timeout -k 11m 10m ` +
        `lotus client retrieve --miner=${miner} ${cidDeal} ` +
        `/home/lotus1/downloads/${miner}-` +
        `${clientDealStatus && clientDealStatus.DealID}-$TIMESTAMP.jpg ` +
        `2>&1 | tee /home/lotus1/downloads/${miner}-` +
        `${clientDealStatus && clientDealStatus.DealID}-$TIMESTAMP.log); ` +
        `sleep 5`

    const entry = (
      <div key={proposalCid} style={{ marginBottom: '1rem' }}>
        <div>
          {Number(i) + 1}. Node #{fromNode} {'->'} Miner {miner} [{fromTag}{' '}
          {'->'} {toTag}] {shortAnnotation}
        </div>
        <div style={{ fontSize: '50%' }}>
          <div>Date: {new Date(date).toString()}</div>
          {!cidDeal && (
            <div>
              CID: {cidDeal} <button onClick={copyCid}>Copy</button>
            </div>
          )}
          <div>Proposal CID: {proposalCid}</div>
          <div>Deal ID: {clientDealStatus && clientDealStatus.DealID}</div>
          <div>Size: {clientDealStatus && clientDealStatus.Size}</div>
          <div>
            Last update:{' '}
            {data && formatDistance(data.updatedAtTime, now) + ' ago'}
          </div>
          {dealMessage && <div>Message: {dealMessage}</div>}
        </div>
        <DealHistory dealHistoryData={dealHistoryData} height={height} />
        {retrieveScript && (
          <div>
            <details>
              <summary>Retrieve Script</summary>
              <pre>{retrieveScript}</pre>
              <button onClick={copyShellRetrieve}>Copy to Clipboard</button>
            </details>
          </div>
        )}
      </div>
    )
    minerEntries.push([miner, entry])

    async function copyCid () {
      console.log('Copying to clipboard', cidDeal)
      await copy(cidDeal)
      console.log('Copied.')
    }

    async function copyShellRetrieve () {
      console.log('Copying to clipboard', retrieveScript)
      await copy(retrieveScript)
      console.log('Copied.')
    }
  }

  minerEntries.sort(([a], [b]) => {
    return Number(a.slice(1)) - Number(b.slice(1))
  })
  const toAnnotations = Object.entries(toAnnotationsMap)
  toAnnotations.sort(([a, , dateA], [b, , dateB]) => {
    const compare = Number(a.slice(1)) - Number(b.slice(1))
    if (compare !== 0) return compare
    return dateA.getTime() - dateB.getTime()
  })
  let toAnnotationsOut = toAnnotations
    .map(([miner, { shortAnnotation, comment }]) => {
      return `\t${miner}: ${JSON.stringify(`${bucket}, ${shortAnnotation}`)},` +
      (comment && comment !== '' ? ` // ${comment}` : '')
    })
    .join('\n')

  const nextBucket = buckets[buckets.indexOf(bucket) + 1]
  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <details>
          <summary>
            New entries ({toAnnotationsOut === '' ? 0 : toAnnotationsOut.split('\n').length}) {' '}
            <button onClick={copyNewEntries}>Copy to Clipboard</button>{' '}
            {nextBucket && <a href={`#${nextBucket}`}>⇨ {nextBucket}</a>}
          </summary>
          <pre>{toAnnotationsOut}</pre>
        </details>
      </div>
      <div>{minerEntries.map(([miner, entry]) => entry)}</div>
    </>
  )

  async function copyNewEntries () {
    console.log('Copying to clipboard', toAnnotationsOut)
    await copy(toAnnotationsOut)
    console.log('Copied.')
  }
}

export default function DealList ({ appState, cid, filterErrors }) {
  const { selectedNode } = appState
  const [now, setNow] = useState(Date.now())
  const [height, setHeight] = useState()
  const client = useLotusClient(selectedNode, 'node')
  const scrollEl = useRef(null)

  useEffect(() => {
    const state = { canceled: false }
    if (!client) return
    async function run () {
      if (state.canceled) return
      const { Height: height } = await client.chainHead()
      if (state.canceled) return
      setHeight(height)
      setNow(Date.now())
      setTimeout(run, 1000)
    }
    run()
    return () => {
      state.canceled = true
    }
  }, [client])

  if (!appState.deals) return null
  const { dealData, dealHistory } = appState

  let deals = cid
    ? appState.deals.filter(deal => deal.cid === cid)
    : [...appState.deals]
  deals.sort(({ date: a }, { date: b }) => b - a)

  return (
    <React.Fragment>
      <div
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          zIndex: 1
        }}
      >
        <a
          href='#'
          onClick={() => {
            scrollEl.current.scrollTop = 0
          }}
        >
          Top
        </a>
      </div>
      <div style={{ overflowY: 'auto', flex: 1 }} ref={scrollEl}>
        <div>
          <h1>Annotations / Deals</h1>
          <div>
            {buckets.map(bucket => (
              <React.Fragment key={bucket}>
                <a href={`#${bucket}`}>{bucket}</a>{' '}
              </React.Fragment>
            ))}
          </div>
          <div>
            {buckets.map(bucket => (
              <div key={bucket}>
                <h2 id={bucket}>Bucket: {bucket}</h2>
                {BucketDealList({
                  bucket,
                  deals,
                  dealData,
                  dealHistory,
                  height,
                  now
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}