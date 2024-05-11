<template>
  <iframe 
    scrolling="no" 
    class="border-gradient rounded-2xl w-[400px] h-[400px] overflow-hidden" 
    :src="iframeUrl" />
</template>

<script lang="ts" setup>
const account = useAccount();
const wallet = account.address.value;

const params = new URLSearchParams()
params.append('hash', String(wallet))

const hasCrown = true
const hasSunglasses = true
const hasCheckeredBackground = true
const hasBezierCurve = true
const bezierCurvesCount = 4

if (hasCrown) {
  params.append('crown', 'true')
}

if (hasSunglasses) {
  params.append('sunglasses', 'true')
}

if (hasCheckeredBackground) {
  params.append('checkers', 'true')
}

if (hasBezierCurve) {
  params.append('bezier', 'true')
  params.append('bezier_count', String(bezierCurvesCount))
}

const iframeUrl = `https://bafybeigosihezyyvy6r3c6eijrospy5mmj5wfnijt7ztwkvkfhge672fsi.ipfs.nftstorage.link/?${params}`
</script>

<style scoped>
  .border-gradient {
    position: relative;
    box-shadow: 0 0 8px rgba(255, 105, 180, 0.5), 0 0 15px rgba(255, 20, 147, 0.5);
  }
</style>
