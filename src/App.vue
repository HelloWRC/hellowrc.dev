<script setup lang="ts">
import { RouterView } from 'vue-router'

const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="app-root relative min-h-screen flex items-center justify-center flex-col py-12">
    <RouterView v-slot="{ Component, route }">
      <transition name="translation" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </RouterView>
    <p class="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs opacity-50">
      Copyright (c) HelloWRC {{ currentYear }}
    </p>
  </div>

</template>

<style lang="scss">
.app-root {
  overflow-x: clip;
}

.translation-enter-active,
.translation-leave-active {
  transition:
      opacity 0.25s ease,
      transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}

.translation-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.translation-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

@media (prefers-reduced-motion: reduce) {
  .translation-enter-active,
  .translation-leave-active {
    transition: none;
  }
}
</style>
