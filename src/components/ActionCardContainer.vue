<script setup lang="ts">

import {onBeforeUnmount, onMounted, ref} from "vue";

const arrowKeys = new Set(["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"]);
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

</script>

<template>
  <div ref="actionListRef"
       class="margin-x-min flex flex-col gap-1 root"
       @keydown="handleActionListKeydown">
    <slot/>
  </div>
</template>

<style scoped lang="scss">

</style>
