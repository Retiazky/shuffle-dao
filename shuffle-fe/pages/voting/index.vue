<template>
  <div>
    <h1>Voting page</h1>
    <h2>{{ votingInfo.name }}</h2>
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
</script>
