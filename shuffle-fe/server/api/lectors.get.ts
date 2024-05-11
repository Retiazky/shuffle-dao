import { useLectorService } from "../services/lector-service";

export default defineEventHandler(async () => {
  const service = useLectorService();
  return await service.getLectors();
});
