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

// 通过mask渲染svg图标，兼容性不好，可以通过请求svg的方式来渲染
const styleExternalIcon = computed(() => ({
  mask:  `url(${iconName}) norepeat 50% 50%`,
  "-webkit-mask": `url(${iconName}) norepeat 50% 50%`,
  "mask-size": "cover"
}))
</script>

<template>
  <IconifyIcon :class="svgClass" :icon="iconName" v-if="!isExt" v-bind="$attrs"></IconifyIcon>
  <div v-else :style="styleExternalIcon" class="svgClass" bg-current v-bind="$attrs"></div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
