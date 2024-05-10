<template>
  <div>
    <h1 class="text-3xl text-secondary p-10">{{ title }}</h1>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
});
</script>

<style></style>
