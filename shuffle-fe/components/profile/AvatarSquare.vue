<template>
  <div class="w-[200px] h-[200px]">
    <img
      src="/img/avatar2.jpg"
      alt="avatar"
      class="w-full h-full object-cover rounded-sm border-gradient"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.border-gradient {
  position: relative;
  box-shadow: 0 0 8px rgba(255, 105, 180, 0.5), 0 0 15px rgba(255, 20, 147, 0.5);
  border-radius: 4px;
}
</style>
