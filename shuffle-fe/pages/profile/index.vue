<template>
  <div class="pb-10 w-1/2 mx-auto">
    <page-title title="Profile" />
    <div class="flex items-center gap-4 pl-10">
      <profile-avatar-square />
      <profile-info-column />
    </div>
    <div>
      <section-title title="My Badges" />
      <div class="flex justify-start">
        <profile-badge
          v-for="badge in badges"
          :key="badge.type"
          :badge="badge"
        />
      </div>
    </div>
    <div>
      <section-title title="My Purchase History" />
      <profile-purchase-history />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Badge } from "~/types";
import { BadgeType } from "~/types";
const badges = ref<Badge[]>([
  {
    type: BadgeType.COURSE,
    collectedAmount: 3,
  },
  {
    type: BadgeType.CLASS,
    collectedAmount: 1,
  },
  {
    type: BadgeType.WORKSHOP,
    collectedAmount: 2,
  },
  {
    type: BadgeType.SPECIAL,
    collectedAmount: 1,
  },
]);
</script>
