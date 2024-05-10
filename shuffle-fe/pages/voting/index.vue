<template>
  <div>
    <h1 class="text-6xl text-center m-4">Voting page</h1>
    <div class="w-full flex flex-col items-center">
      <h2 class="text-2xl">Current topic: {{ votingInfo.name }}</h2>
      <ul class="w-1/4 border p-2">
        <li
          v-for="category in votingInfo.categories"
          :key="category.category"
          class="flex justify-between gap-2 items-center w-full my-1"
        >
          <span>{{ category.category }}</span>
          <s-button
            variant="outline"
            class
            @click="voteForCategory(category.category)"
          >
            Vote ({{ category.votes }})
          </s-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
interface CategoryVotes {
  category: string;
  votes: number;
}

interface VotingInfo {
  name: string;
  categories: CategoryVotes[];
}

const votingInfo = ref<VotingInfo>({
  name: "New lector",
  categories: [
    { category: "Lucia Bandova", votes: 0 },
    { category: "Danka Matica", votes: 0 },
  ],
});

const voteForCategory = (category: string) => {
  const categoryIndex = votingInfo.value.categories.findIndex(
    (c) => c.category === category
  );
  votingInfo.value.categories[categoryIndex].votes++;
};
</script>
