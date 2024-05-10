<template>
  <div class="w-1/3 flex justify-evenly p-2">
    <nuxt-link
      v-for="link in NAVIGATION"
      :key="link.to"
      :to="link.to"
      active-class="text-black underline"
      class="text-primary-foreground"
    >
      {{ link.label }}
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
interface NavigationLink {
  to: string;
  label: string;
}

const NAVIGATION: NavigationLink[] = [
  { to: "/home", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/voting", label: "Voting" },
  { to: "/profile", label: "Profile" },
];
</script>

<style></style>
