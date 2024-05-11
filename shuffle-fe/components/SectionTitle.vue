<template>
  <div>
    <h1 class="text-2xl text-foreground/70 p-10">{{ title }}</h1>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
});
</script>

<style></style>
