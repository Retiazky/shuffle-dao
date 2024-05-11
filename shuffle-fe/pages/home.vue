<template>
  <div class="w-2/3 mx-auto">
    <page-title title="Upcoming Classes" />
    <div class="grid grid-cols-4 gap-3 px-10 pb-10">
      <class-card
        v-for="lesson in lessons"
        :key="lesson.id"
        :class-info="{ date: lesson.startsAt + '000', style: lesson.style }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Lesson } from "~/types";

const lessons = ref<Lesson[]>([]);
// const upcommingClasses: ClassInfo[] = [
//   {
//     date: "2024-06-04",
//     time: "18:00",
//     level: ClassLevel.INTERMEDIATE,
//     partOfCourse: true,
//   },
//   {
//     date: "2024-06-04",
//     time: "19:00",
//     level: ClassLevel.ADVANCED,
//     partOfCourse: true,
//   },
//   {
//     date: "2024-06-06",
//     time: "18:00",
//     level: ClassLevel.BEGINNER,
//     partOfCourse: true,
//   },
//   {
//     date: "2024-06-06",
//     time: "19:00",
//     level: ClassLevel.OPEN,
//     partOfCourse: false,
//   },
//   {
//     date: "2024-06-11",
//     time: "18:00",
//     level: ClassLevel.INTERMEDIATE,
//     partOfCourse: true,
//   },
//   {
//     date: "2024-06-11",
//     time: "19:00",
//     level: ClassLevel.ADVANCED,
//     partOfCourse: true,
//   },
//   {
//     date: "2024-06-13",
//     time: "18:00",
//     level: ClassLevel.BEGINNER,
//     partOfCourse: true,
//   },
//   {
//     date: "2024-06-13",
//     time: "19:00",
//     level: ClassLevel.OPEN,
//     partOfCourse: false,
//   },
// ];

onMounted(async () => {
  lessons.value = await $fetch("/api/lessons");
});
</script>

<style></style>
