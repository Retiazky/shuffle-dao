import { voteService } from "../services/vote-service";

export default defineEventHandler(async () => {
  const service = voteService();
  return await service.getProposals();
});
