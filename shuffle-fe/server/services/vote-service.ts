import type { GraphQLResponse, Proposal } from "~/types";

const API_BASE = "http://localhost:4350";

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
                        proposals(where: {executed_eq: false, voteEnd_gt: "${currentTime}"}) {
                            proposer
                            voteEnd
                            voteStart
                            id
                            for
                            against
                            abstain
                            createdAt
                            description
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
