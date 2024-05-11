<template>
  <header class="w-full bg-accent grid grid-cols-3 items-center px-2 shadow-md">
    <h1 class="text-xl font-thin px-8">Shufflescape</h1>
    <page-navigation />
    <span class="flex justify-end items-center gap">
      <client-only>
        <s-button variant="ghost" @click="toggleColorMode">
          <icon
            v-if="colorMode.preference === 'light'"
            icon="radix-icons:moon"
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <icon
            v-else
            icon="radix-icons:sun"
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
        </s-button>
        <connect-button class="w-1/3" />
      </client-only>
    </span>
  </header>
</template>

<script lang="ts" setup>
import PageNavigation from '@/components/layout/PageNavigation.vue';
import { Icon } from '@iconify/vue';

const colorMode = useColorMode();
colorMode.preference = 'light';
const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light';
};
</script>

<style></style>
