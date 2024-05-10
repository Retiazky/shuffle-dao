<template>
  <div>
    <page-title title="Upcoming Classes" />
    <div class="grid grid-cols-4 gap-10 px-10 pb-10">
      <class-card
        v-for="classInfo in upcommingClasses"
        :key="classInfo.date + classInfo.time + classInfo.level"
        :class-info="classInfo"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ClassInfo } from '~/types';
import { ClassLevel } from '~/types';
const upcommingClasses: ClassInfo[] = [
  {
    date: '2024-06-04',
    time: '18:00',
    level: ClassLevel.INTERMEDIATE,
    partOfCourse: true,
  },
  {
    date: '2024-06-04',
    time: '19:00',
    level: ClassLevel.ADVANCED,
    partOfCourse: true,
  },
  {
    date: '2024-06-06',
    time: '18:00',
    level: ClassLevel.BEGINNER,
    partOfCourse: true,
  },
  {
    date: '2024-06-06',
    time: '19:00',
    level: ClassLevel.OPEN,
    partOfCourse: false,
  },
  {
    date: '2024-06-11',
    time: '18:00',
    level: ClassLevel.INTERMEDIATE,
    partOfCourse: true,
  },
  {
    date: '2024-06-11',
    time: '19:00',
    level: ClassLevel.ADVANCED,
    partOfCourse: true,
  },
  {
    date: '2024-06-13',
    time: '18:00',
    level: ClassLevel.BEGINNER,
    partOfCourse: true,
  },
  {
    date: '2024-06-13',
    time: '19:00',
    level: ClassLevel.OPEN,
    partOfCourse: false,
  },
];
</script>

<style></style>
