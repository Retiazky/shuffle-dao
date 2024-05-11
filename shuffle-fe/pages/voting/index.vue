<template>
  <div class="w-full flex flex-col items-center gap-2 px-2">
    <page-title title="Voting" />
    <ul class="w-full border p-2">
      <li
        v-for="voting in currentVotings"
        :key="voting.id.toString()"
        class="flex justify-between gap-2 items-center w-full my-1"
      >
        <span><b>Voting:</b> {{ voting.text }}</span>
        <span class="flex w-1/2 justify-between gap-2">
          <s-button class="flex-1" @click="voteForCategory(voting.id, 1)">
            I am for ({{ voting.votes.for }})
          </s-button>
          <s-button
            variant="destructive"
            class="flex-1"
            @click="voteForCategory(voting.id, 0)"
          >
            I am against ({{ voting.votes.against }})
          </s-button>
          <s-button
            variant="outline"
            class="flex-1"
            @click="voteForCategory(voting.id, 2)"
          >
            I am abstain ({{ voting.votes.abstain }})
          </s-button>
        </span>
      </li>
    </ul>
    <s-card class="w-1/2">
      <s-card-header>
        <s-card-title>Create instructor voting</s-card-title>
        <s-card-description>Status: {{ status }}</s-card-description>
      </s-card-header>
      <s-card-content>
        <form @submit="onCreateInstructor">
          <s-form-field v-slot="{ componentField }" name="name">
            <s-form-item>
              <s-form-label>Name</s-form-label>
              <s-form-control>
                <s-input v-bind="componentField" />
              </s-form-control>
              <s-form-description>Instructor name</s-form-description>
              <s-form-message />
            </s-form-item>
          </s-form-field>
          <s-form-field v-slot="{ componentField }" name="address">
            <s-form-item>
              <s-form-label>Address</s-form-label>
              <s-form-control>
                <s-input v-bind="componentField" />
              </s-form-control>
              <s-form-description>Instructor address</s-form-description>
              <s-form-message />
            </s-form-item>
          </s-form-field>
          <s-button class="w-full mt-2" type="submit">Create</s-button>
          <p v-if="error">{{ error }}</p>
        </form>
      </s-card-content>
    </s-card>
    <s-button class="w-1/2" @click="delegate">Delegate</s-button>
  </div>
</template>
<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { type Address, encodeFunctionData } from "viem";
import * as z from "zod";
import { config } from "~/plugins/wagmi";
import { shuffleDAOContract } from "~/utils/factories/dao-factory";
import { shuffleGovernorContract } from "~/utils/factories/governor-factory";
import { shuffleTokenContract } from "~/utils/factories/token-factory";

interface VotingInfo {
  id: bigint;
  text: string;
  votes: {
    for: bigint;
    against: bigint;
    abstain: bigint;
  };
}

const currentVotings = ref<VotingInfo[]>([
  {
    id: 0n,
    text: "New lector: Lucia Mandova",
    votes: {
      for: 10n,
      against: 2n,
      abstain: 1n,
    },
  },
  {
    id: 1n,
    text: "Voting 2",
    votes: {
      for: 5n,
      against: 3n,
      abstain: 2n,
    },
  },
]);

/**
 * Voting info
 * @param id Voting ID
 * @param vote 0 - against, 1 - for, 2 - abstain
 */
const voteForCategory = (votingId: bigint, vote: 0 | 1 | 2) => {
  console.log(votingId, vote);
};

const createInstructorSchema = toTypedSchema(
  z.object({
    address: z
      .string()
      .refine((name) => name.length > 0 && /^(0x)?[0-9a-fA-F]{40}$/.test(name)),
    name: z.string(),
  })
);

const createInstructorForm = useForm({
  validationSchema: createInstructorSchema,
});
const { writeContract, error, status } = useWriteContract({ config });

const onCreateInstructor = createInstructorForm.handleSubmit((values) => {
  console.log(values);
  const targetAddresses: Address[] = [shuffleDAOContract.address as Address];
  const targetValues: bigint[] = [0n];
  const callDatas = [
    encodeFunctionData({
      abi: shuffleDAOContract.abi,
      functionName: "addInstructor",
      args: [values.address as Address, values.name],
    }),
  ];
  writeContract({
    ...shuffleGovernorContract,
    functionName: "propose",
    args: [targetAddresses, targetValues, callDatas, "Add instructor"],
  });
});

const { address } = useAccount();

const delegate = () => {
  writeContract({
    ...shuffleTokenContract,
    functionName: "delegate",
    args: [address.value as Address],
  });
};
</script>
