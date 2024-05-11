import { abi as shuffleGovernorABI } from "@/abi/ShuffleGovernor";

export const shuffleGovernorContract = {
  address: "0x30dbEcc57bd06B780d5274a2e74527324f372E9b",
  abi: shuffleGovernorABI,
} as const;

export const useGovernorFactory = () => {
  const getProposalThreshold = () =>
    useReadContract({
      ...shuffleGovernorContract,
      functionName: "proposalThreshold",
      args: [],
    });

  const getQuorum = (blockNumber: string) => {
    const _blockNumber = BigInt(blockNumber);
    useReadContract({
      ...shuffleGovernorContract,
      functionName: "quorum",
      args: [_blockNumber],
    });
  };

  const getVotingPeriod = () =>
    useReadContract({
      ...shuffleGovernorContract,
      functionName: "votingPeriod",
      args: [],
    });

  const getVotingDelay = () =>
    useReadContract({
      ...shuffleGovernorContract,
      functionName: "votingDelay",
      args: [],
    });

  return { getProposalThreshold, getQuorum, getVotingDelay, getVotingPeriod };
};
