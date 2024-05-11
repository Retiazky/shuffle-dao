<template>
  <div>
    <h1 class="text-2xl text-foreground/70 pl-10 pt-10 pb-2">{{ title }}</h1>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
});
</script>

<style></style>
