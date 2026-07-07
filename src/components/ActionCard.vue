<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import FluentIcon from "./FluentIcon.vue";
import { fluentIcons, type FluentIconName } from "../icons/fluent.ts";

type ActionCardIcon = FluentIconName | (string & {});

const props = withDefaults(defineProps<{
  icon: ActionCardIcon,
  header: string | undefined,
  description?: string,
  to: string
}>(),
    {
      description: undefined
    }
)

const isFluentIcon = computed(() =>
    Object.prototype.hasOwnProperty.call(fluentIcons, props.icon)
)

const fluentIconName = computed(() =>
    isFluentIcon.value ? props.icon as FluentIconName : undefined
)

const imageIconUrl = computed(() =>
    isFluentIcon.value ? undefined : props.icon
)

const isRelativeLink = computed(() => {
  const to = props.to.trim();
  return !/^[a-z][a-z\d+\-.]*:/i.test(to) && !to.startsWith("//");
})

const linkComponent = computed(() =>
    isRelativeLink.value ? RouterLink : "a"
)

const linkAttrs = computed(() =>
    isRelativeLink.value
        ? { to: props.to }
        : { href: props.to, target: "_blank", rel: "noopener noreferrer" }
)
</script>

<template>
  <component :is="linkComponent" v-bind="linkAttrs" class="card-root">
    <div class="action-card-container">
      <FluentIcon v-if="fluentIconName"
                  :name="fluentIconName"
                  :size="24"
                  class="action-card-icon row-span-2 justify-center self-center"/>
      <img v-else
           :src="imageIconUrl"
           alt=""
           aria-hidden="true"
           loading="lazy"
           width="24" height="24"
           class="action-card-icon action-card-image row-span-2 justify-center self-center"/>
      <span class="font-medium">{{ props.header }}</span>
      <FluentIcon name="chevronRight20Regular"
                  class="row-span-2 justify-center self-center chevron"/>
      <span class="text-sm text-wrap opacity-75">{{ props.description }}</span>
    </div>
  </component>
</template>

<style scoped lang="scss">
*:focus {
  outline: none;
}

.card-root {


  & .action-card-container {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.75rem;

    padding: 0.4rem 0.5rem;
    border: #00000000 1px solid;

    transition:
        border-color 0.25s ease,
        box-shadow 0.25s ease,
        transform 0.25s ease;

  }

  & .action-card-icon {
    justify-self: center;
    align-self: center;
  }

  & .action-card-image {
    display: block;
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  & .chevron{
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:hover, &:focus-visible {
    & .action-card-container{
      border-color: var(--accent-color1);
      box-shadow: 0 0 0 3px var(--accent-color3),
      0 0 18px var(--accent-color2);
    }

    & .chevron {
      transform: translateX(2px);
    }
  }

  &:active {
    & .action-card-container {
      border-color: var(--accent-color);
      box-shadow: 0 0 0 2px var(--accent-color3),
      0 0 8px var(--accent-color2);
      transform: scale(0.995);
    }

  }
}
</style>
