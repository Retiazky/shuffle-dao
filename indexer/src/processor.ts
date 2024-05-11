import {assertNotNull} from '@subsquid/util-internal'
import * as governorAbi from './abi/governor'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'

export const GOVERNOR_CONTRACT = '0x30dbEcc57bd06B780d5274a2e74527324f372E9b'.toLowerCase()

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

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
