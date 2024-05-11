import {TypeormDatabase} from '@subsquid/typeorm-store'
import {processor, GOVERNOR_CONTRACT, DAO_CONTRACT, BADGE_CONTRACT} from './processor'
import { Instructor, Lesson, Participant, Proposal, BadgeOwner } from './model'
import * as governorAbi from './abi/governor'
import * as daoAbi from './abi/shuffleDAO'
import * as badgeAbi from './abi/erc1155'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    const proposals: Map<string, Proposal> = new Map()
	const instructors: Map<string, Instructor> = new Map()
	const lessons: Map<string, Lesson> = new Map()
	const participants: Participant[] = []
	const badgeOwners: Map<string, BadgeOwner> = new Map()
    for (let c of ctx.blocks) {
        for (let log of c.logs) {
			if (log.address === GOVERNOR_CONTRACT && log.topics[0] === governorAbi.events.ProposalCreated.topic) {
				const { proposalId, proposer, voteStart, voteEnd, description, targets, values, calldatas} = governorAbi.events.ProposalCreated.decode(log)
				const proposal = new Proposal({
					id: proposalId.toString(),
					proposer,
					description,
					voteStart,
					voteEnd,
					targets,
					values: values.map(v => v.toString()),
					calldatas,
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
			if(log.address === DAO_CONTRACT && log.topics[0] === daoAbi.events.InstructorSet.topic){
				const { instructor, name, status } = daoAbi.events.InstructorSet.decode(log)
				const newInstructor = new Instructor({
					id: instructor,
					name,
					active: status,
				})
				instructors.set(instructor, newInstructor)
			}
			if(log.address === DAO_CONTRACT && log.topics[0] === daoAbi.events.LessonCreated.topic){
				const { id, instructor, startsAt, endsAt, maxParticipants, style, fee } = daoAbi.events.LessonCreated.decode(log)
				let instructorEntity = instructors.get(instructor)
				if (!instructorEntity) {
					instructorEntity = await ctx.store.get(Instructor, instructor)
					if (!instructorEntity) {
						throw new Error(`Instructor ${instructor} not found`)
					}
					instructors.set(instructor, instructorEntity)
				}
				const newLesson = new Lesson({
					id: id.toString(),
					instructor: instructorEntity,
					startsAt,
					endsAt,
					maxParticipants,
					style,
					fee,
				})
				lessons.set(id.toString(), newLesson)
			}
			if(log.address === DAO_CONTRACT && log.topics[0] === daoAbi.events.ParticipantRegistered.topic){{
				const { id, participant } = daoAbi.events.ParticipantRegistered.decode(log)
				let lessonEntity = lessons.get(id.toString())
				if (!lessonEntity) {
					lessonEntity = await ctx.store.get(Lesson, id.toString())
					if (!lessonEntity) {
						throw new Error(`Lesson ${id.toString()} not found`)
					}
					lessons.set(id.toString(), lessonEntity)
				}
				let participantEntity = new Participant({
					id: participant,
					lesson: lessonEntity,
				})
				participants.push(participantEntity)
			}
			if(log.address === BADGE_CONTRACT && log.topics[0] === badgeAbi.events.TransferSingle.topic){
				const { from, to, id, value } = badgeAbi.events.TransferSingle.decode(log)
				let badgeOwnerFrom = badgeOwners.get(from)
				let badgeOwnerTo = badgeOwners.get(to)
				if(!badgeOwnerFrom){
					badgeOwnerFrom = await ctx.store.get(BadgeOwner, from)
					if(!badgeOwnerFrom){
						badgeOwnerFrom = new BadgeOwner({
							id: from,
							owner: from,
							amount: 0n,
							badgeId: id
						})
					}
				}
				if(!badgeOwnerTo){
					badgeOwnerTo = await ctx.store.get(BadgeOwner, to)
					if(!badgeOwnerTo){
						badgeOwnerTo = new BadgeOwner({
							id: to,
							owner: to,
							amount: 0n,
							badgeId: id
						})
					}
				}
				badgeOwnerFrom.amount -= value
				badgeOwnerTo.amount += value
				badgeOwners.set(from, badgeOwnerFrom)
				badgeOwners.set(to, badgeOwnerTo)
			}
        }
    }}
	await ctx.store.save([...proposals.values()])
	await ctx.store.save([...instructors.values()])
	await ctx.store.save([...lessons.values()])
	await ctx.store.save([...badgeOwners.values()])
	await ctx.store.save(participants)
})


