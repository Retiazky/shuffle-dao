import { useLessonService } from "../services/lesson-service";

export default defineEventHandler(async () => {
  const service = useLessonService();
  return await service.getLessons();
});
