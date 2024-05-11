import { abi as shuffleGovernorABI } from "@/abi/ShuffleGovernor";

export const shuffleGovernorContract = {
  address: "0xcAB56aAaF2E06eeFD9f28Bec8F443a0BD06Afebb",
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
