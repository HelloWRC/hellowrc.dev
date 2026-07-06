<script lang="ts">

import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";
import ActionCard from "../components/ActionCard.vue";

const arrowKeys = new Set(["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"]);

export default defineComponent({
  components: {ActionCard},
  setup() {
    const currentYear = new Date().getFullYear();
    const actionListRef = ref<HTMLElement | null>(null);

    const getActionCards = () =>
        Array.from(actionListRef.value?.querySelectorAll<HTMLAnchorElement>(".card-root") ?? []);

    const focusFirstActionCard = () => {
      const firstActionCard = getActionCards()[0];
      firstActionCard?.focus();

      return Boolean(firstActionCard);
    }

    const focusActionCard = (direction: 1 | -1) => {
      const actionCards = getActionCards();
      if (actionCards.length === 0) {
        return;
      }

      const activeElement = document.activeElement;
      const activeIndex = actionCards.findIndex((card) =>
          card === activeElement || card.contains(activeElement)
      );
      const nextIndex = activeIndex === -1
          ? direction > 0 ? 0 : actionCards.length - 1
          : (activeIndex + direction + actionCards.length) % actionCards.length;

      actionCards[nextIndex]?.focus();
    }

    const handleActionListKeydown = (event: KeyboardEvent) => {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
        return;
      }

      event.preventDefault();
      focusActionCard(event.key === "ArrowDown" ? 1 : -1);
    }

    const isDocumentWithoutFocus = () => {
      const activeElement = document.activeElement;
      return activeElement === null
          || activeElement === document.body
          || activeElement === document.documentElement;
    }

    const handleWindowKeydown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || !arrowKeys.has(event.key) || !isDocumentWithoutFocus()) {
        return;
      }

      if (focusFirstActionCard()) {
        event.preventDefault();
      }
    }

    onMounted(() => {
      window.addEventListener("keydown", handleWindowKeydown);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("keydown", handleWindowKeydown);
    });

    return {currentYear, actionListRef, handleActionListKeydown};
  }
})
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center flex-col py-12">
    <div ref="actionListRef"
         class="margin-x-min flex flex-col gap-1 root"
         @keydown="handleActionListKeydown">
      <div class="mb-1">
        <h1 class="text-xl font-bold" style="color: var(--accent-color)">HelloWRC.Dev</h1>
        <p class="text-sm opacity-75">一名学生，平时喜欢写一些有意思的小东西。</p>
      </div>
      <ActionCard header="关于我" icon="person24Regular" to="https://blogs.hellowrc.dev/intro.html"/>
      <ActionCard header="博客" icon="book24Regular" to="https://blogs.hellowrc.dev/"/>
      <span class="text-sm opacity-75">参与的项目</span>
      <ActionCard header="ClassIsland"
                  description="一款适用于班级大屏的课表小工具，可以一目了然地显示各种信息。我是此项目的主要开发者。"
                  icon="/src/assets/ClassIsland.svg" to="https://www.classisland.tech/"/>
      <span class="text-sm opacity-75">相关链接</span>
      <ActionCard header="GitHub"
                  icon="github" to="https://github.com/HelloWRC"/>
      <ActionCard header="哔哩哔哩"
                  icon="bilibili" to="https://space.bilibili.com/355897687"/>
    </div>
    <p class="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs opacity-50">
      Copyright (c) HelloWRC {{ currentYear }}
    </p>
  </div>
</template>

<style lang="scss">
.root {
  animation: slide-in-from-right 0.5s cubic-bezier(0.25, 1, 0.5, 1) both;
}

@keyframes slide-in-from-right {
  from {
    opacity: 0;
    transform: translateX(200px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
