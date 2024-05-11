import type { GraphQLResponse, Instructor } from "~/types";
import { API_BASE } from "../utils";

interface RawInstructor {
  id: string;
  name: string;
}

export function useLectorService() {
  const getLectors = async (): Promise<Instructor[]> => {
    const { data } = await $fetch<
      GraphQLResponse<{ instructors: RawInstructor[] }>
    >(`${API_BASE}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
                    query {
                        instructors {
                            id
                            name
                        }
                    }
                `,
      }),
    });
    return data.instructors.map((instructor) => ({
      address: instructor.id,
      name: instructor.name,
    }));
  };
  return { getLectors };
}
