import React from 'react'
import DealList from './deal-list'
import useLotusClient from '../lib/use-lotus-client'

export default function Deals ({ appState, updateAppState }) {
  const { deals, dealData, selectedNode, filterErrors } = appState
  const client = useLotusClient(selectedNode, 'node')
  return (
    <div>
      <h1>Deals</h1>
      {deals && deals.length > 0 && (
        <>
          <button
            style={{ height: '2rem', marginBottom: '1rem' }}
            onClick={clearAll}
          >
            Clear
          </button>
          <label>
            <input
              type='checkbox'
              checked={filterErrors}
              onChange={() => {
                updateAppState(draft => {
                  draft.filterErrors = !filterErrors
                })
              }}
              style={{ marginLeft: '1rem' }}
            />
            Filter errors
          </label>{' '}
          <button
            style={{ height: '2rem', marginBottom: '1rem' }}
            onClick={importSlingshot}
          >
            Import Slingshot Deals
          </button>
        </>
      )}
      <DealList
        client={client}
        appState={appState}
        filterErrors={filterErrors}
      />
    </div>
  )

  function clearAll () {
    updateAppState(draft => {
      draft.deals = []
      draft.dealData = {}
      draft.dealHistory = {}
    })
  }

  async function importSlingshot () {
    console.log('Jim import slingshot deals')
    const url =
      'https://raw.githubusercontent.com/jimpick/filecoin-wiki-test/master/wiki-small-blocks-combined/deals/f021682.json'
    const resp = await fetch(url)
    const slingshotDeals = await resp.json()
    console.log('Jim slingshot deals', slingshotDeals)
    console.log('Jim dealData', dealData)
    const existingProposalCids = new Set(deals.map(deal => deal.proposalCid))
    console.log('Jim existingProposalCids', existingProposalCids)
    updateAppState(draft => {
      if (!draft.deals) {
        draft.deals = []
      }
      for (const { miner, wikiFile, dealCid, cid } of slingshotDeals) {
        if (!existingProposalCids.has(dealCid)) {
          console.log('Add:', miner, wikiFile, dealCid, dealData[dealCid])
          if (dealData[dealCid]) {
            draft.deals.push({
              type: 'slingshot',
              proposalCid: dealCid,
              date: new Date(dealData[dealCid].clientDealStatus.CreationTime),
              fromNode: 1,
              miner: miner,
              cid,
              wikiFile
            })
          } else {
            console.log(
              'Deal data not found, skipping',
              miner,
              wikiFile,
              dealCid
            )
          }
        }
      }
    })
  }
}
