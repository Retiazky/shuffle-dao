import type { GraphQLResponse, Lesson } from "~/types";
import { API_BASE } from "../utils";

export function useLessonService() {
  const getLessons = async (): Promise<Lesson[]> => {
    const { data } = await $fetch<GraphQLResponse<{ lessons: Lesson[] }>>(
      `${API_BASE}/graphql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
                    query {
                        lessons {
                          id
                          fee
                          instructor {
                            id
                            active
                            name
                          }
                          maxParticipants
                          startsAt
                          style
                          endsAt
                          participants {
                            id
                          }
                        }
                    }
                `,
        }),
      }
    );
    return data.lessons;
  };
  return { getLessons };
}
