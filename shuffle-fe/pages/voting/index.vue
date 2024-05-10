<template>
  <div>
    <h1 class="text-6xl text-center m-4">Voting page</h1>
    <div class="w-full flex flex-col items-center">
      <h2 class="text-2xl">Current topic: {{ votingInfo.name }}</h2>
      <h3>Categories:</h3>
      <ul class="w-1/4 border p-2">
        <li
          v-for="category in votingInfo.categories"
          :key="category.category"
          class="flex justify-between gap-2 items-center w-full my-1"
        >
          <span>{{ category.category }}</span>
          <s-button
            variant="outline"
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

const votingInfo: VotingInfo = ref<VotingInfo>({
  name: "Best of 2021",
  categories: [
    { category: "Best Movie", votes: 0 },
    { category: "Best TV Show", votes: 0 },
    { category: "Best Song", votes: 0 },
    { category: "Best Album", votes: 0 },
  ],
});

const voteForCategory = (category: string) => {
  const categoryIndex = votingInfo.value.categories.findIndex(
    (c) => c.category === category
  );
  votingInfo.value.categories[categoryIndex].votes++;
};
</script>
