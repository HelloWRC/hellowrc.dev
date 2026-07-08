<script setup lang="ts">

import ActionCardContainer from "../components/ActionCardContainer.vue";
import ActionCard from "../components/ActionCard.vue";
</script>

<template>
  <action-card-container>
    <div class="mb-1">
      <p>愿我们在那鲜花芬芳的西风尽头重逢。</p>
      <br/>
      <p>「人生就是如此，道别是一件难事，既然忘不掉，那就装着吧。」</p>
    </div>
    <ActionCard icon="arrowRight24Regular" header="返回首页" to="/"/>
  </action-card-container>
</template>

<style scoped lang="scss">

</style>