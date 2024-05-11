const API_BASE = "http://localhost:4350";

export function voteService() {
  const getProposals = async () =>
    await fetch(`${API_BASE}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
                    query {
                        proposals {
                            id
                            title
                            description
                            votes
                        }
                    }
                `,
      }),
    });

  return { getProposals };
}
