import { abi as shuffleGovernorABI } from "@/abi/ShuffleGovernor";

const shuffleGovernorContract = {
  address: "0x0000000000000000000000000000000000000000",
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
