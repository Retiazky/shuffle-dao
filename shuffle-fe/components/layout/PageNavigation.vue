<template>
  <div class="w-full flex justify-evenly p-2 bg-secondary">
    <nuxt-link
      to="/home"
      active-class="text-black"
      class="text-primary-foreground"
      >Home</nuxt-link
    >
    <nuxt-link
      to="/courses"
      active-class="text-black"
      class="text-primary-foreground"
      >Courses</nuxt-link
    >
    <nuxt-link
      to="/profile"
      active-class="text-black"
      class="text-primary-foreground"
      >Profile</nuxt-link
    >
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
