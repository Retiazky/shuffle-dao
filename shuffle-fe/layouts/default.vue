<template>
  <div class="min-h-screen w-full flex flex-col">
    <page-header />
    <page-navigation />
    <main class="h-full flex-1">
      <slot />
    </main>
    <page-footer />
  </div>
</template>

<script lang="ts" setup>
import PageHeader from "@/components/layout/PageHeader.vue";
import PageNavigation from "@/components/layout/PageNavigation.vue";
import PageFooter from "@/components/layout/PageFooter.vue";
</script>

<style></style>
