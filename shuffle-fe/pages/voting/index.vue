<template>
  <div>
    <page-title title="Voting" />
    <div class="w-full flex flex-col items-center gap-2">
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
            <s-button class="w-full" type="submit">Create</s-button>
            <p v-if="error">{{ error }}</p>
          </form>
        </s-card-content>
      </s-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import type { Address } from "viem";
import * as z from "zod";
import { config } from "~/plugins/wagmi";
import { shuffleDAOContract } from "~/utils/factories/dao-factory";

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
  writeContract({
    ...shuffleDAOContract,
    functionName: "addInstructor",
    args: [values.address as Address, values.name],
  });
});
</script>
