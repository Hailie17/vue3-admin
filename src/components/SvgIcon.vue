<script setup lang="ts">
import {isExternal} from '@/utils/validate'
import {Icon as IconifyIcon} from '@iconify/vue'
const { iconName, customClass} = defineProps<{
  iconName: string,
  customClass: string
}>()
// 组合自定义类名
const svgClass = computed(() =>  {
  customClass ? `icon ${customClass}` : 'icon'
})
</script>

<template>
  <IconifyIcon :class="svgClass" :icon="iconName"></IconifyIcon>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
