import {TypeormDatabase} from '@subsquid/typeorm-store'
import {processor, GOVERNOR_CONTRACT} from './processor'
import { Proposal } from './model'
import * as governorAbi from './abi/governor'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    const proposals: Map<string, Proposal> = new Map()
    for (let c of ctx.blocks) {
        for (let log of c.logs) {
			if (log.address === GOVERNOR_CONTRACT && log.topics[0] === governorAbi.events.ProposalCreated.topic) {
				const { proposalId, proposer, voteStart, voteEnd, description } = governorAbi.events.ProposalCreated.decode(log)
				const proposal = new Proposal({
					id: proposalId.toString(),
					proposer,
					description,
					voteStart,
					voteEnd,
					for: 0n,
					against: 0n,
					abstain: 0n,
					createdAt: c.header.timestamp / 1000,
					executed: false,
				})
				proposals.set(proposalId.toString(), proposal)
			}
			if (log.address === GOVERNOR_CONTRACT && log.topics[0] === governorAbi.events.VoteCast.topic) {
				const { proposalId, support, weight} = governorAbi.events.VoteCast.decode(log)
				let proposal = proposals.get(proposalId.toString())
				if (!proposal) {
					proposal = await ctx.store.get(Proposal, proposalId.toString())
					if (!proposal) {
						throw new Error(`Proposal ${proposalId.toString()} not found`)
					}
					proposals.set(proposalId.toString(), proposal)
				}
				if (support==0){
					proposal.against += weight;
				} else if (support==1){
					proposal.for += weight;
				} else {
					proposal.abstain += weight;
				}
				proposals.set(proposalId.toString(), proposal)
			}
			if (log.address === GOVERNOR_CONTRACT && log.topics[0] === governorAbi.events.ProposalExecuted.topic) {
				const { proposalId } = governorAbi.events.ProposalExecuted.decode(log)
				let proposal = proposals.get(proposalId.toString())
				if (!proposal) {
					proposal = await ctx.store.get(Proposal, proposalId.toString())
					if (!proposal) {
						throw new Error(`Proposal ${proposalId.toString()} not found`)
					}
					proposals.set(proposalId.toString(), proposal)
				}
				proposal.executed = true
				proposals.set(proposalId.toString(), proposal)
			}
        }


    }
	await ctx.store.save([...proposals.values()])
})


