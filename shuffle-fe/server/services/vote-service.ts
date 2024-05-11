import type { GraphQLResponse, Proposal } from "~/types";
import { API_BASE } from "../utils";

export function voteService() {
  const getProposals = async () => {
    // Remove miliseconds
    const currentTime = Date.now().toString().slice(0, -3);
    console.log(currentTime);
    const { data } = await $fetch<GraphQLResponse<{ proposals: Proposal[] }>>(
      `${API_BASE}/graphql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
                    query {
                      proposals(where: {executed_eq: false, AND: {voteEnd_gt: "${currentTime}", OR: {for_gt: "1000000000000000000000"}}}) {
                        proposer
                        voteEnd
                        voteStart
                        id
                        for
                        against
                        abstain
                        createdAt
                        description
                        targets
                        values
                        calldatas
                      }
                    }
                `,
        }),
      }
    );
    return data.proposals;
  };

  return { getProposals };
}
