<template>
  <div class="relative flex justify-center items-center w-[180px] h-[180px]">
    <div
      :class="{
        'shadow-gold': props.badge.type === BadgeType.COURSE,
        'shadow-red': props.badge.type === BadgeType.CLASS,
        'shadow-purple': props.badge.type === BadgeType.WORKSHOP,
        'shadow-brown': props.badge.type === BadgeType.SPECIAL,
      }"
      class="flex items-center justify-center rounded-full w-[96px] h-[96px] relative"
    >
      <span class="text-5xl">{{ emoji }}</span>
    </div>
    <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
      <defs>
        <filter id="shadow-gold" height="130%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="2.5"
            flood-color="rgba(255, 215, 0, 0.6)"
          />
        </filter>
        <filter id="shadow-red" height="130%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="2.5"
            flood-color="rgba(255, 0, 0, 0.6)"
          />
        </filter>
        <filter id="shadow-purple" height="130%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="2.5"
            flood-color="rgba(128, 0, 128, 0.6)"
          />
        </filter>
        <filter id="shadow-brown" height="130%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="2.5"
            flood-color="rgba(165, 42, 42, 0.6)"
          />
        </filter>
      </defs>
      <path id="curve" d="M 10,65 A 40,40 0 0,1 90,65" fill="transparent" />
      <!-- <path id="curve" d="M 10,50 A 40,40 0 0,1 90,50" fill="transparent" /> -->
      <text fill="white" :filter="'url(#shadow-' + badgeTypeClass + ')'">
        <textPath
          xlink:href="#curve"
          startOffset="50%"
          text-anchor="middle"
          side="left"
          method="stretch"
          spacing="auto"
        >
          {{ badgeText }}
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import type { Badge } from '~/types';
import { BadgeType } from '~/types';
const props = defineProps<{
  badge: Badge;
}>();

const emoji = computed(() => {
  switch (props.badge.type) {
    case BadgeType.COURSE:
      return '🎓';
    case BadgeType.CLASS:
      return '📚';
    case BadgeType.WORKSHOP:
      return '🪩';
    default:
      return '🏆';
  }
});

const badgeText = computed(() => {
  switch (props.badge.type) {
    case BadgeType.COURSE:
      return 'Course';
    case BadgeType.CLASS:
      return 'Class';
    case BadgeType.WORKSHOP:
      return 'Workshop';
    default:
      return 'Special';
  }
});

const badgeTypeClass = computed(() => {
  switch (props.badge.type) {
    case BadgeType.COURSE:
      return 'gold';
    case BadgeType.CLASS:
      return 'red';
    case BadgeType.WORKSHOP:
      return 'purple';
    default:
      return 'brown'; // Assuming SPECIAL type here
  }
});
</script>

<style scoped>
.shadow-gold {
  box-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
}
.shadow-red {
  box-shadow: 0 0 8px rgba(255, 0, 0, 0.6);
}
.shadow-purple {
  box-shadow: 0 0 8px rgba(128, 0, 128, 0.6);
}
.shadow-brown {
  box-shadow: 0 0 8px rgba(165, 42, 42, 0.6);
}

.relative {
  overflow: visible; /* Allows the SVG to display fully even if it goes beyond the bounds */
}

text {
  font-size: 22px;
  dominant-baseline: middle;
  text-anchor: middle;
}
</style>
