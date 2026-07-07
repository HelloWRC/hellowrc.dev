<script setup lang="ts">

import ActionCard from "../components/ActionCard.vue";
import ActionCardContainer from "../components/ActionCardContainer.vue";
</script>

<template>
  <action-card-container>
    <p class="text-sm" style="color: var(--accent-color)">HelloWRC.Dev</p>
    <p>找不到您请求的页面。</p>
    <ActionCard icon="arrowRight24Regular" header="返回首页" to="/"/>
  </action-card-container>
</template>

<style scoped lang="scss">

</style>