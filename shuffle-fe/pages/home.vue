<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h1 class="text-6xl my-2">Welcome to Shufflescape</h1>
    <hr />
    <h2 class="text-2xl">Select your plan</h2>
    <div class="w-full flex justify-center gap-2">
      <s-card
        v-for="plan in PLANS"
        :key="plan.name"
        class="w-1/4 m-2 flex flex-col justify-between"
      >
        <s-card-header>
          <s-card-title class="text-2xl">{{ plan.name }}</s-card-title>
          <s-card-description class="text-xl">
            {{ plan.price }}$ / month
          </s-card-description>
        </s-card-header>
        <s-card-content>
          <p>{{ plan.description }}</p>
        </s-card-content>
        <s-card-footer>
          <s-button class="w-full">Select</s-button>
        </s-card-footer>
      </s-card>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Plan {
  name: string;
  price: number;
  description: string;
}
const PLANS: Plan[] = [
  {
    name: "Basic (1 month)",
    price: 50,
    description: "This is a basic plan",
  },
  {
    name: "Pro (2 months)",
    price: 45,
    description: "This is a pro plan",
  },
  {
    name: "Enterprise (3 months)",
    price: 40,
    description: "This is an enterprise plan",
  },
];
</script>
