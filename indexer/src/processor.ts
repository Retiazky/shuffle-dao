import {assertNotNull} from '@subsquid/util-internal'
import * as governorAbi from './abi/governor'
import * as daoAbi from './abi/shuffleDAO'
import * as badgeAbi from './abi/erc1155'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'

export const GOVERNOR_CONTRACT = '0x85D1cd2C9c3F3C751D94eE09205f9a210056317D'.toLowerCase()
export const DAO_CONTRACT = '0x4C2a1Bf6d7a0cFd082587d0C376530d1c28da0e7'.toLowerCase()
export const BADGE_CONTRACT = '0x4b77B2D37B3101f399051BfBAEe303eecc5944EA'.toLowerCase()

export const processor = new EvmBatchProcessor()
    .setGateway('https://v2.archive.subsquid.io/network/base-sepolia')
    .setRpcEndpoint({
        url: assertNotNull('https://rpc.ankr.com/base_sepolia'),
        rateLimit: 10
    })
    .setFinalityConfirmation(10)
    .setFields({
        transaction: {
            from: true,
            value: true,
            hash: true,
        },
    })
    .setBlockRange({
        from: 9829570,
    })
    .addLog({
		address: [ GOVERNOR_CONTRACT],
		topic0: [governorAbi.events.ProposalCreated.topic, governorAbi.events.VoteCast.topic, governorAbi.events.ProposalExecuted.topic],
	  })
	.addLog({
		address: [DAO_CONTRACT],
		topic0: [daoAbi.events.InstructorSet.topic, daoAbi.events.LessonCreated.topic, daoAbi.events.ParticipantRegistered.topic]
	})
	.addLog({
		address: [BADGE_CONTRACT],
		topic0: [badgeAbi.events.TransferSingle.topic]
	})

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
