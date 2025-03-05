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
// 判断图标是否为外链
const isExt = computed(() => isExternal(iconName))

// 外部icon渲染方式
const styleExternalIcon = computed(() => ({
  mask:  `url(${iconName}) norepeat 50% 50%`,
  "-webkit-mask": `url(${iconName}) norepeat 50% 50%`,
  "mask-size": "cover"
}))
</script>

<template>
  <IconifyIcon :class="svgClass" :icon="iconName" v-if="!isExt"></IconifyIcon>
  <div v-else :style="styleExternalIcon" class="svgClass" bg-current></div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
