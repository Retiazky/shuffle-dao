<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="w-full h-screen overflow-hidden relative">
    <div
      :class="{ 'is-active': !joinClicked }"
      class="flex justify-center items-center screen-content z-20"
    >
      <img
        class="landing-gif"
        src="/gifs/landing.gif"
        alt="Shuffle background"
      />
      <s-button
        class="z-20 w-1/2 h-40 text-6xl border-primary border-4 rounded-xl text-white"
        variant="secondary"
        @click="toggleJoinClicked"
        >JOIN THE SHUFFLESCAPE</s-button
      >
    </div>
    <div
      :class="{ 'is-active': joinClicked }"
      class="flex screen-content join-screen"
    >
      <!-- TODO: remove the white border -->
      <img
        class="joining-gif"
        src="/gifs/joining.gif"
        alt="Shuffle background"
      />
      <div class="flex flex-col w-1/2 bg-accent">
        <div class="flex flex-col gap-5 m-20">
          <span class="text-5xl font-thin">Shuffle with us</span>
          <span class="text-3xl">Join us today</span>
        </div>
        <div class="flex m-20 grow items-center">
          <connect-button />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
});

const joinClicked = ref(false);

const toggleJoinClicked = () => {
  joinClicked.value = !joinClicked.value;
};
</script>
<style scoped>
.landing-gif {
  @apply h-screen w-screen top-0 left-0 absolute blur-sm scale-110;
}

.joining-gif {
  @apply h-screen w-1/2 blur-sm scale-110;
}

.screen-content {
  @apply w-full h-screen;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease;
  transform: translateY(100%);
}

.screen-content.is-active {
  @apply z-20;
  transform: translateY(0);
}

.welcome-screen.is-active + .join-screen {
  transform: translateY(100%);
}
</style>
