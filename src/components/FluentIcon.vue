<script setup lang="ts">
import { computed } from 'vue'
import { fluentIcons, type FluentIconName } from '../icons/fluent'

const props = withDefaults(
  defineProps<{
    name: FluentIconName
    size?: number | string
    title?: string
    decorative?: boolean
  }>(),
  {
    size: 20,
    decorative: true,
  },
)

const iconMarkup = computed(() =>
  fluentIcons[props.name].replace('<svg ', '<svg aria-hidden="true" focusable="false" '),
)

const iconSize = computed(() =>
  typeof props.size === 'number' ? `${props.size}px` : props.size,
)

const isDecorative = computed(() => props.decorative && !props.title)
const accessibleLabel = computed(() => props.title ?? props.name)
</script>

<template>
  <span
    class="fluent-icon"
    :style="{ '--fluent-icon-size': iconSize }"
    :aria-hidden="isDecorative ? 'true' : undefined"
    :role="isDecorative ? undefined : 'img'"
    :aria-label="isDecorative ? undefined : accessibleLabel"
    v-html="iconMarkup"
  ></span>
</template>

<style scoped lang="scss">
.fluent-icon {
  --fluent-icon-size: 20px;

  display: inline-flex;
  width: var(--fluent-icon-size);
  height: var(--fluent-icon-size);
  line-height: 0;
  vertical-align: -0.125em;
}

.fluent-icon :deep(svg) {
  display: block;
  flex: none;
  width: 100%;
  height: 100%;
  fill: currentColor;
}
</style>
