<template>
  <component :is="componentType"></component>
</template>

<script lang="ts" setup>
import { isExternal } from '@/utils/validate'
const { to } = defineProps<{ to: string }>()

const componentType = computed(() => {
  return isExternal(to) ? 'a' : 'router-link'
})
</script>
