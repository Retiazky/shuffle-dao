<template>
  <!-- TODO: transition doesnt work -->
  <div class="w-full h-screen overflow-hidden">
    <div
      :class="{ 'is-active': !joinClicked }"
      class="flex justify-center items-center overflow-hidden screen-content welcome-screen screen-content"
    >
      <img
        class="landing-gif"
        src="/gifs/landing.gif"
        alt="Shuffle background"
      />
      <s-button
        class="z-20 w-1/2 h-40 text-6xl border-primary border-4 rounded-xl"
        variant="secondary"
        @click="joinClicked = true"
        >JOIN US!</s-button
      >
    </div>
    <div
      :class="{ 'is-active': joinClicked }"
      class="screen-content join-screen"
    >
      <!-- TODO: remove the white border -->
      <img
        class="joining-gif w-1/2"
        src="/gifs/joining.gif"
        alt="Shuffle background"
      />
      <div class="flex flex-col w-1/2 bg-accent">
        <div class="flex flex-col gap-5 m-20">
          <span class="text-5xl">Shuffle with us</span>
          <span class="text-3xl">Join us today</span>
        </div>
        <div class="flex m-20 grow items-center">
          <s-button
            class="w-1/2 h-14 text-xl border-primary border-4 rounded-xl"
            variant="secondary"
            @click="$router.push('/home')"
            >Connect your wallet</s-button
          >
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
</script>
<style scoped>
.landing-gif {
  @apply h-screen w-screen top-0 left-0 absolute blur-sm scale-110;
}

.joining-gif {
  @apply h-screen w-1/2 blur-sm;
}

.screen-content {
  @apply w-full h-screen;
}

.screen-content.is-active {
  transform: translateY(0);
}

.welcome-screen.is-active + .join-screen {
  transform: translateY(100%);
}
</style>
