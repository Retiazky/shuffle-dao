import * as p from '@subsquid/evm-codec'
import { event, fun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    EIP712DomainChanged: event("0x0a6387c9ea3628b88a633bb4f3b151770f70085117a15f9bf3787cda53f13d31", {}),
    ProposalCanceled: event("0x789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c", {"proposalId": p.uint256}),
    ProposalCreated: event("0x7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e0", {"proposalId": p.uint256, "proposer": p.address, "targets": p.array(p.address), "values": p.array(p.uint256), "signatures": p.array(p.string), "calldatas": p.array(p.bytes), "voteStart": p.uint256, "voteEnd": p.uint256, "description": p.string}),
    ProposalExecuted: event("0x712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f", {"proposalId": p.uint256}),
    ProposalQueued: event("0x9a2e42fd6722813d69113e7d0079d3d940171428df7373df9c7f7617cfda2892", {"proposalId": p.uint256, "etaSeconds": p.uint256}),
    VoteCast: event("0xb8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda4", {"voter": indexed(p.address), "proposalId": p.uint256, "support": p.uint8, "weight": p.uint256, "reason": p.string}),
    VoteCastWithParams: event("0xe2babfbac5889a709b63bb7f598b324e08bc5a4fb9ec647fb3cbc9ec07eb8712", {"voter": indexed(p.address), "proposalId": p.uint256, "support": p.uint8, "weight": p.uint256, "reason": p.string, "params": p.bytes}),
}

export const functions = {
    BALLOT_TYPEHASH: fun("0xdeaaa7cc", {}, p.bytes32),
    CLOCK_MODE: fun("0x4bf5d7e9", {}, p.string),
    COUNTING_MODE: fun("0xdd4e2ba5", {}, p.string),
    EXTENDED_BALLOT_TYPEHASH: fun("0x2fe3e261", {}, p.bytes32),
    cancel: fun("0x452115d6", {"targets": p.array(p.address), "values": p.array(p.uint256), "calldatas": p.array(p.bytes), "descriptionHash": p.bytes32}, p.uint256),
    castVote: fun("0x56781388", {"proposalId": p.uint256, "support": p.uint8}, p.uint256),
    castVoteBySig: fun("0x8ff262e3", {"proposalId": p.uint256, "support": p.uint8, "voter": p.address, "signature": p.bytes}, p.uint256),
    castVoteWithReason: fun("0x7b3c71d3", {"proposalId": p.uint256, "support": p.uint8, "reason": p.string}, p.uint256),
    castVoteWithReasonAndParams: fun("0x5f398a14", {"proposalId": p.uint256, "support": p.uint8, "reason": p.string, "params": p.bytes}, p.uint256),
    castVoteWithReasonAndParamsBySig: fun("0x5b8d0e0d", {"proposalId": p.uint256, "support": p.uint8, "voter": p.address, "reason": p.string, "params": p.bytes, "signature": p.bytes}, p.uint256),
    clock: fun("0x91ddadf4", {}, p.uint48),
    eip712Domain: fun("0x84b0196e", {}, {"fields": p.bytes1, "name": p.string, "version": p.string, "chainId": p.uint256, "verifyingContract": p.address, "salt": p.bytes32, "extensions": p.array(p.uint256)}),
    execute: fun("0x2656227d", {"targets": p.array(p.address), "values": p.array(p.uint256), "calldatas": p.array(p.bytes), "descriptionHash": p.bytes32}, p.uint256),
    getVotes: fun("0xeb9019d4", {"account": p.address, "timepoint": p.uint256}, p.uint256),
    getVotesWithParams: fun("0x9a802a6d", {"account": p.address, "timepoint": p.uint256, "params": p.bytes}, p.uint256),
    hasVoted: fun("0x43859632", {"proposalId": p.uint256, "account": p.address}, p.bool),
    hashProposal: fun("0xc59057e4", {"targets": p.array(p.address), "values": p.array(p.uint256), "calldatas": p.array(p.bytes), "descriptionHash": p.bytes32}, p.uint256),
    name: fun("0x06fdde03", {}, p.string),
    nonces: fun("0x7ecebe00", {"owner": p.address}, p.uint256),
    onERC1155BatchReceived: fun("0xbc197c81", {"_0": p.address, "_1": p.address, "_2": p.array(p.uint256), "_3": p.array(p.uint256), "_4": p.bytes}, p.bytes4),
    onERC1155Received: fun("0xf23a6e61", {"_0": p.address, "_1": p.address, "_2": p.uint256, "_3": p.uint256, "_4": p.bytes}, p.bytes4),
    onERC721Received: fun("0x150b7a02", {"_0": p.address, "_1": p.address, "_2": p.uint256, "_3": p.bytes}, p.bytes4),
    proposalDeadline: fun("0xc01f9e37", {"proposalId": p.uint256}, p.uint256),
    proposalEta: fun("0xab58fb8e", {"proposalId": p.uint256}, p.uint256),
    proposalNeedsQueuing: fun("0xa9a95294", {"_0": p.uint256}, p.bool),
    proposalProposer: fun("0x143489d0", {"proposalId": p.uint256}, p.address),
    proposalSnapshot: fun("0x2d63f693", {"proposalId": p.uint256}, p.uint256),
    proposalThreshold: fun("0xb58131b0", {}, p.uint256),
    propose: fun("0x7d5e81e2", {"targets": p.array(p.address), "values": p.array(p.uint256), "calldatas": p.array(p.bytes), "description": p.string}, p.uint256),
    queue: fun("0x160cbed7", {"targets": p.array(p.address), "values": p.array(p.uint256), "calldatas": p.array(p.bytes), "descriptionHash": p.bytes32}, p.uint256),
    quorum: fun("0xf8ce560a", {"timepoint": p.uint256}, p.uint256),
    relay: fun("0xc28bc2fa", {"target": p.address, "value": p.uint256, "data": p.bytes}, ),
    state: fun("0x3e4f49e6", {"proposalId": p.uint256}, p.uint8),
    supportsInterface: fun("0x01ffc9a7", {"interfaceId": p.bytes4}, p.bool),
    version: fun("0x54fd4d50", {}, p.string),
    votingDelay: fun("0x3932abb1", {}, p.uint256),
    votingPeriod: fun("0x02a251a3", {}, p.uint256),
}

export class Contract extends ContractBase {

    BALLOT_TYPEHASH() {
        return this.eth_call(functions.BALLOT_TYPEHASH, {})
    }

    CLOCK_MODE() {
        return this.eth_call(functions.CLOCK_MODE, {})
    }

    COUNTING_MODE() {
        return this.eth_call(functions.COUNTING_MODE, {})
    }

    EXTENDED_BALLOT_TYPEHASH() {
        return this.eth_call(functions.EXTENDED_BALLOT_TYPEHASH, {})
    }

    clock() {
        return this.eth_call(functions.clock, {})
    }

    eip712Domain() {
        return this.eth_call(functions.eip712Domain, {})
    }

    getVotes(account: GetVotesParams["account"], timepoint: GetVotesParams["timepoint"]) {
        return this.eth_call(functions.getVotes, {account, timepoint})
    }

    getVotesWithParams(account: GetVotesWithParamsParams["account"], timepoint: GetVotesWithParamsParams["timepoint"], params: GetVotesWithParamsParams["params"]) {
        return this.eth_call(functions.getVotesWithParams, {account, timepoint, params})
    }

    hasVoted(proposalId: HasVotedParams["proposalId"], account: HasVotedParams["account"]) {
        return this.eth_call(functions.hasVoted, {proposalId, account})
    }

    hashProposal(targets: HashProposalParams["targets"], values: HashProposalParams["values"], calldatas: HashProposalParams["calldatas"], descriptionHash: HashProposalParams["descriptionHash"]) {
        return this.eth_call(functions.hashProposal, {targets, values, calldatas, descriptionHash})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    nonces(owner: NoncesParams["owner"]) {
        return this.eth_call(functions.nonces, {owner})
    }

    proposalDeadline(proposalId: ProposalDeadlineParams["proposalId"]) {
        return this.eth_call(functions.proposalDeadline, {proposalId})
    }

    proposalEta(proposalId: ProposalEtaParams["proposalId"]) {
        return this.eth_call(functions.proposalEta, {proposalId})
    }

    proposalNeedsQueuing(_0: ProposalNeedsQueuingParams["_0"]) {
        return this.eth_call(functions.proposalNeedsQueuing, {_0})
    }

    proposalProposer(proposalId: ProposalProposerParams["proposalId"]) {
        return this.eth_call(functions.proposalProposer, {proposalId})
    }

    proposalSnapshot(proposalId: ProposalSnapshotParams["proposalId"]) {
        return this.eth_call(functions.proposalSnapshot, {proposalId})
    }

    proposalThreshold() {
        return this.eth_call(functions.proposalThreshold, {})
    }

    quorum(timepoint: QuorumParams["timepoint"]) {
        return this.eth_call(functions.quorum, {timepoint})
    }

    state(proposalId: StateParams["proposalId"]) {
        return this.eth_call(functions.state, {proposalId})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    version() {
        return this.eth_call(functions.version, {})
    }

    votingDelay() {
        return this.eth_call(functions.votingDelay, {})
    }

    votingPeriod() {
        return this.eth_call(functions.votingPeriod, {})
    }
}

/// Event types
export type EIP712DomainChangedEventArgs = EParams<typeof events.EIP712DomainChanged>
export type ProposalCanceledEventArgs = EParams<typeof events.ProposalCanceled>
export type ProposalCreatedEventArgs = EParams<typeof events.ProposalCreated>
export type ProposalExecutedEventArgs = EParams<typeof events.ProposalExecuted>
export type ProposalQueuedEventArgs = EParams<typeof events.ProposalQueued>
export type VoteCastEventArgs = EParams<typeof events.VoteCast>
export type VoteCastWithParamsEventArgs = EParams<typeof events.VoteCastWithParams>

/// Function types
export type BALLOT_TYPEHASHParams = FunctionArguments<typeof functions.BALLOT_TYPEHASH>
export type BALLOT_TYPEHASHReturn = FunctionReturn<typeof functions.BALLOT_TYPEHASH>

export type CLOCK_MODEParams = FunctionArguments<typeof functions.CLOCK_MODE>
export type CLOCK_MODEReturn = FunctionReturn<typeof functions.CLOCK_MODE>

export type COUNTING_MODEParams = FunctionArguments<typeof functions.COUNTING_MODE>
export type COUNTING_MODEReturn = FunctionReturn<typeof functions.COUNTING_MODE>

export type EXTENDED_BALLOT_TYPEHASHParams = FunctionArguments<typeof functions.EXTENDED_BALLOT_TYPEHASH>
export type EXTENDED_BALLOT_TYPEHASHReturn = FunctionReturn<typeof functions.EXTENDED_BALLOT_TYPEHASH>

export type CancelParams = FunctionArguments<typeof functions.cancel>
export type CancelReturn = FunctionReturn<typeof functions.cancel>

export type CastVoteParams = FunctionArguments<typeof functions.castVote>
export type CastVoteReturn = FunctionReturn<typeof functions.castVote>

export type CastVoteBySigParams = FunctionArguments<typeof functions.castVoteBySig>
export type CastVoteBySigReturn = FunctionReturn<typeof functions.castVoteBySig>

export type CastVoteWithReasonParams = FunctionArguments<typeof functions.castVoteWithReason>
export type CastVoteWithReasonReturn = FunctionReturn<typeof functions.castVoteWithReason>

export type CastVoteWithReasonAndParamsParams = FunctionArguments<typeof functions.castVoteWithReasonAndParams>
export type CastVoteWithReasonAndParamsReturn = FunctionReturn<typeof functions.castVoteWithReasonAndParams>

export type CastVoteWithReasonAndParamsBySigParams = FunctionArguments<typeof functions.castVoteWithReasonAndParamsBySig>
export type CastVoteWithReasonAndParamsBySigReturn = FunctionReturn<typeof functions.castVoteWithReasonAndParamsBySig>

export type ClockParams = FunctionArguments<typeof functions.clock>
export type ClockReturn = FunctionReturn<typeof functions.clock>

export type Eip712DomainParams = FunctionArguments<typeof functions.eip712Domain>
export type Eip712DomainReturn = FunctionReturn<typeof functions.eip712Domain>

export type ExecuteParams = FunctionArguments<typeof functions.execute>
export type ExecuteReturn = FunctionReturn<typeof functions.execute>

export type GetVotesParams = FunctionArguments<typeof functions.getVotes>
export type GetVotesReturn = FunctionReturn<typeof functions.getVotes>

export type GetVotesWithParamsParams = FunctionArguments<typeof functions.getVotesWithParams>
export type GetVotesWithParamsReturn = FunctionReturn<typeof functions.getVotesWithParams>

export type HasVotedParams = FunctionArguments<typeof functions.hasVoted>
export type HasVotedReturn = FunctionReturn<typeof functions.hasVoted>

export type HashProposalParams = FunctionArguments<typeof functions.hashProposal>
export type HashProposalReturn = FunctionReturn<typeof functions.hashProposal>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NoncesParams = FunctionArguments<typeof functions.nonces>
export type NoncesReturn = FunctionReturn<typeof functions.nonces>

export type OnERC1155BatchReceivedParams = FunctionArguments<typeof functions.onERC1155BatchReceived>
export type OnERC1155BatchReceivedReturn = FunctionReturn<typeof functions.onERC1155BatchReceived>

export type OnERC1155ReceivedParams = FunctionArguments<typeof functions.onERC1155Received>
export type OnERC1155ReceivedReturn = FunctionReturn<typeof functions.onERC1155Received>

export type OnERC721ReceivedParams = FunctionArguments<typeof functions.onERC721Received>
export type OnERC721ReceivedReturn = FunctionReturn<typeof functions.onERC721Received>

export type ProposalDeadlineParams = FunctionArguments<typeof functions.proposalDeadline>
export type ProposalDeadlineReturn = FunctionReturn<typeof functions.proposalDeadline>

export type ProposalEtaParams = FunctionArguments<typeof functions.proposalEta>
export type ProposalEtaReturn = FunctionReturn<typeof functions.proposalEta>

export type ProposalNeedsQueuingParams = FunctionArguments<typeof functions.proposalNeedsQueuing>
export type ProposalNeedsQueuingReturn = FunctionReturn<typeof functions.proposalNeedsQueuing>

export type ProposalProposerParams = FunctionArguments<typeof functions.proposalProposer>
export type ProposalProposerReturn = FunctionReturn<typeof functions.proposalProposer>

export type ProposalSnapshotParams = FunctionArguments<typeof functions.proposalSnapshot>
export type ProposalSnapshotReturn = FunctionReturn<typeof functions.proposalSnapshot>

export type ProposalThresholdParams = FunctionArguments<typeof functions.proposalThreshold>
export type ProposalThresholdReturn = FunctionReturn<typeof functions.proposalThreshold>

export type ProposeParams = FunctionArguments<typeof functions.propose>
export type ProposeReturn = FunctionReturn<typeof functions.propose>

export type QueueParams = FunctionArguments<typeof functions.queue>
export type QueueReturn = FunctionReturn<typeof functions.queue>

export type QuorumParams = FunctionArguments<typeof functions.quorum>
export type QuorumReturn = FunctionReturn<typeof functions.quorum>

export type RelayParams = FunctionArguments<typeof functions.relay>
export type RelayReturn = FunctionReturn<typeof functions.relay>

export type StateParams = FunctionArguments<typeof functions.state>
export type StateReturn = FunctionReturn<typeof functions.state>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

export type VotingDelayParams = FunctionArguments<typeof functions.votingDelay>
export type VotingDelayReturn = FunctionReturn<typeof functions.votingDelay>

export type VotingPeriodParams = FunctionArguments<typeof functions.votingPeriod>
export type VotingPeriodReturn = FunctionReturn<typeof functions.votingPeriod>

