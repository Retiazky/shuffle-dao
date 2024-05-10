<template>
  <div>
    <h1>Landing page</h1>
    <s-button @click="$router.push('/home')">Go in!</s-button>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
