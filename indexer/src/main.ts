import {TypeormDatabase} from '@subsquid/typeorm-store'
import {processor} from './processor'
import { Proposal } from './model'
import { GOVERNOR_CONTRACT } from './processor'
import * as governorAbi from './abi/governor'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    const proposals: Map<string, Proposal> = new Map()
    for (let c of ctx.blocks) {
        for (let log of c.logs) {
			if (log.address === GOVERNOR_CONTRACT && log.topic === governorAbi.events.ProposalCreated.topic) {
				const { proposalId, proposer, targets, values, signatures, calldatas, voteStart, voteEnd, description } = governorAbi.events.ProposalCreated.decode(log)
				const proposal = new Proposal({
					id: proposalId.toString(),
					proposer,
					description,
					voteStart,
					voteEnd,
					for: 0n,
					against: 0n,
					abstain: 0n
				})
				proposals.set(proposalId.toString(), proposal)
			}

        }
    }
	await ctx.store.save([...proposals.values()])
})


