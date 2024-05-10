<template>
  <header class="w-full bg-accent flex justify-between items-center p-4">
    <h1 class="text-xl font-thin">Shufflescape</h1>
    <page-navigation />
    <span class="flex items-center gap">
      <client-only>
        <s-dropdown-menu>
          <s-dropdown-menu-trigger as-child>
            <s-button variant="ghost">
              <icon
                icon="radix-icons:moon"
                class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-white"
              />
              <icon
                icon="radix-icons:sun"
                class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              />
              <span class="sr-only">Toggle theme</span>
            </s-button>
          </s-dropdown-menu-trigger>
          <s-dropdown-menu-content align="end">
            <s-dropdown-menu-item @click="colorMode.preference = 'light'">
              Light
            </s-dropdown-menu-item>
            <s-dropdown-menu-item @click="colorMode.preference = 'dark'">
              Dark
            </s-dropdown-menu-item>
            <s-dropdown-menu-item @click="colorMode.preference = 'system'">
              System
            </s-dropdown-menu-item>
          </s-dropdown-menu-content>
        </s-dropdown-menu>
      </client-only>

      <s-button class="border border-white" variant="secondary">
        Connect
      </s-button>
    </span>
  </header>
</template>

<script lang="ts" setup>
import PageNavigation from '@/components/layout/PageNavigation.vue';
import { Icon } from '@iconify/vue';

const colorMode = useColorMode();
</script>

<style></style>
