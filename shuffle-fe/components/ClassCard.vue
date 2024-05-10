<template>
  <div
    class="flex flex-col w-[280px] h-[320px] border rounded-sm shadow-md relative justify-end"
  >
    <img
      class="absolute w-full h-full object-cover rounded-t-sm shadow-md"
      :src="imgSrc"
      alt="class image"
    />
    <div
      class="flex flex-col px-2 py-2 mt-1 z-10 justify-end bg-gray-400 bg-opacity-80"
    >
      <span class="info-text">{{ title }}</span>
      <span class="info-text">{{ level }}</span>
      <span class="info-text">{{ partOfCourse }}</span>
      <s-button
        class="w-full h-8 rounded-sm p-2 shadow-md mt-2"
        variant="secondary"
        :class="{ 'opacity-50': isAttendingClass }"
        @click="buttonClicked"
      >
        <span class="text-sm font-normal">{{
          isAttendingClass ? 'Attending' : 'Buy ticket'
        }}</span>
      </s-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ClassInfo } from '~/types';
import { ClassLevel } from '~/types';
const props = defineProps<{
  classInfo: ClassInfo;
}>();

const day = new Date(props.classInfo.date).toLocaleDateString('en-US', {
  weekday: 'long',
});
const date = new Date(props.classInfo.date).toLocaleDateString('sk-SK', {
  day: 'numeric',
  month: 'numeric',
});
const title = `${day} ${date} ${props.classInfo.time}`;
const level = `${props.classInfo.level} Level`;
const partOfCourse = `${
  props.classInfo.partOfCourse ? 'Part of Course' : 'Single Class'
}`;

const isAttendingClass = ref(Math.random() > 0.5);
const imgSrc =
  props.classInfo.level === ClassLevel.BEGINNER
    ? 'img/beginner.jpg'
    : props.classInfo.level === ClassLevel.INTERMEDIATE
    ? 'img/intermediate.jpg'
    : props.classInfo.level === ClassLevel.ADVANCED
    ? 'img/advanced.jpg'
    : 'img/open.jpg';

const buttonClicked = () => {
  isAttendingClass.value = !isAttendingClass.value;
  // TODO: implement the logic for buying a ticket
};
</script>

<style scoped>
.info-text {
  @apply text-base font-normal;
}
</style>
