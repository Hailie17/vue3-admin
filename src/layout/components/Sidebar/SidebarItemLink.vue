<template>
  <component :is="componentType" v-bind="componentProps">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { isExternal } from '@/utils/validate'
const { to } = defineProps<{ to: string }>()

const componentType = computed(() => {
  return isExternal(to) ? 'a' : 'router-link'
})

const componentProps = computed(() => {
  if (isExternal(to)) {
    return {
      href: to,
      target: '_blank',
    }
  } else {
    return {
      to,
    }
  }
})
</script>
