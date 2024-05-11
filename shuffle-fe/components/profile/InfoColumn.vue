<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-2 items-center">
      <span>Wallet: </span>
      <span class="wallet-address" :title="wallet">{{ shortenedWallet }}</span>
    </div>
    <div class="flex gap-2 items-center">
      <span>Voting Power: </span>
      <span>
        {{ userVotingPowerErr ? userVotingPowerErr : userVotingPower }}
      </span>
    </div>
    <div class="flex gap-2 items-center">
      <span>ShuffTokens: </span>
      <span>
        {{ shuffTokenErr ? shuffTokenErr : shuffTokens }}
      </span>
    </div>
    <s-card v-if="amILector">
      <s-card-header>
        <s-card-title>Give Badge</s-card-title>
        <s-card-description v-if="status || error"
          >{{ status }} - {{ error }}</s-card-description
        >
      </s-card-header>
      <s-card-content>
        <form @submit="giveBadge">
          <s-form-field v-slot="{ componentField }" name="address">
            <s-form-item>
              <s-form-label>Address</s-form-label>
              <s-form-control>
                <s-input v-bind="componentField" />
              </s-form-control>
              <s-form-description>Address of the user</s-form-description>
              <s-form-message />
            </s-form-item>
          </s-form-field>
          <s-form-field v-slot="{ componentField }" name="type">
            <s-form-item>
              <s-form-label>Type</s-form-label>
              <s-form-control>
                <s-select v-bind="componentField">
                  <s-select-trigger>
                    <s-select-value placeholder="Select a badge" />
                  </s-select-trigger>
                  <s-select-content>
                    <s-select-item
                      v-for="badge in BADGES"
                      :key="badge.id"
                      :value="String(badge.id)"
                    >
                      {{ badge.name }}
                    </s-select-item>
                  </s-select-content>
                </s-select>
              </s-form-control>
              <s-form-description>Badge type</s-form-description>
              <s-form-message />
            </s-form-item>
          </s-form-field>
          <s-button class="w-full" type="submit">Give Badge</s-button>
        </form>
      </s-card-content>
    </s-card>
  </div>
</template>

<script lang="ts" setup>
import { config } from "@/plugins/wagmi";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import type { Address } from "viem";
import * as z from "zod";
import { shuffleDAOContract } from "~/utils/factories/dao-factory";
import { shuffleTokenContract } from "~/utils/factories/token-factory";
const account = useAccount();
const wallet = account.address;

const shortenedWallet = computed(() => {
  if (wallet.value && wallet.value.length > 10) {
    return `${wallet.value.slice(0, 6)}...${wallet.value.slice(-4)}`;
  }
  return wallet.value;
});

const { data: userVotingPower, error: userVotingPowerErr } = useReadContract({
  ...shuffleTokenContract,
  functionName: "getVotes",
  args: [account.address.value!],
});

const { data: shuffTokens, error: shuffTokenErr } = useReadContract({
  ...shuffleTokenContract,
  functionName: "balanceOf",
  args: [account.address.value!],
});

const amILector = ref<boolean>(false);

onMounted(async () => {
  const lectors = await $fetch("/api/lectors");
  console.log(lectors);
  amILector.value = lectors.some(
    (lector) => lector.address === account.address.value?.toLowerCase()
  );
});

const BADGES = ref([
  {
    name: "Course",
    id: 0,
  },
  {
    name: "Class",
    id: 1,
  },
  {
    name: "Workshop",
    id: 2,
  },
  {
    name: "Special",
    id: 3,
  },
]);

const giveBadgeSchema = toTypedSchema(
  z.object({
    address: z
      .string()
      .refine((name) => name.length > 0 && /^(0x)?[0-9a-fA-F]{40}$/.test(name)),
    type: z.string().refine((type) => {
      return BADGES.value.some((badge) => badge.id === Number(type));
    }),
  })
);

const giveBadgeForm = useForm({
  validationSchema: giveBadgeSchema,
});

const { writeContract, status, error } = useWriteContract({ config });

const giveBadge = giveBadgeForm.handleSubmit(async (values) => {
  console.log(values);
  writeContract({
    ...shuffleDAOContract,
    functionName: "assignBadge",
    args: [values.address as Address, BigInt(values.type)],
  });
});
</script>

<style scoped>
span:nth-child(1) {
  font-size: large;
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
