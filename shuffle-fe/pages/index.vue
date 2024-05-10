<template>
  <div>
    <h1>Landing page</h1>
    <s-button @click="$router.push('/home')">Go in! {{ isConnected }}</s-button>
    <connect-button />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
});
const { isConnected } = useAccount();
</script>
