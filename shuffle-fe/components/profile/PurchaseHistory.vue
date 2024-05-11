<template>
  <div class="px-10">
    <!-- TODO: Get from indexer -->
    <s-table>
      <s-tableHeader>
        <s-tableRow>
          <s-tableHead class="w-[120px] table-head"> Invoice n. </s-tableHead>
          <s-tableHead class="table-head">Date</s-tableHead>
          <s-tableHead class="table-head">Type</s-tableHead>
          <s-tableHead class="table-head text-right"> Price </s-tableHead>
          <s-tableHead class="table-head text-right">
            Obtained ShuffTokens
          </s-tableHead>
        </s-tableRow>
      </s-tableHeader>
      <s-tableBody>
        <s-tableRow>
          <s-tableCell class="font-medium"> INV001 </s-tableCell>
          <s-tableCell class="text">11.5.2024</s-tableCell>
          <s-tableCell class="text">Beginner Course</s-tableCell>
          <s-tableCell class="text text-right"> $60.00 </s-tableCell>
          <s-tableCell class="text text-right"> 20 </s-tableCell>
        </s-tableRow>
      </s-tableBody>
    </s-table>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.table-head {
  @apply text-secondary text-lg;
}

.text {
  @apply font-light text-base;
}
</style>
