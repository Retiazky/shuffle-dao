<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-2 items-center">
      <span>Wallet: </span>
      <span class="wallet-address" :title="wallet">{{ shortenedWallet }}</span>
    </div>
    <div class="flex gap-2 items-center">
      <span>Voting Power: </span>
      <span>{{ votingPower }}</span>
    </div>
    <div class="flex gap-2 items-center">
      <span>ShuffTokens: </span>
      <span>{{ shuffTokens }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
const account = useAccount();
const wallet = account.address;
// TODO: Get from indexer
const votingPower = ref(2);
const shuffTokens = ref(20);

const shortenedWallet = computed(() => {
  if (wallet.value && wallet.value.length > 10) {
    return `${wallet.value.slice(0, 6)}...${wallet.value.slice(-4)}`;
  }
  return wallet.value;
});
</script>

<style scoped>
span:nth-child(1) {
  font-size: medium;
  font-weight: 300;
}

span:nth-child(2) {
  padding: 4px 8px;
  background-color: primary;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.wallet-address:hover {
  background-color: #e2e3e5;
  text-decoration: underline;
}
</style>
