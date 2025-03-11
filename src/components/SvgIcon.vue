<template>
  <IconifyIcon :class="svgClass" :icon="iconName" v-if="!isExt" v-bind="$attrs"></IconifyIcon>
  <div v-else :style="styleExternalIcon" :class="svgClass" bg-current v-bind="$attrs"></div>
</template>

<script setup lang="ts">
import {isExternal} from '@/utils/validate'
import {Icon as IconifyIcon} from '@iconify/vue'

// 丧失响应式
// const { iconName, customClass} = withDefaults(defineProps<{
//   iconName: string,
//   customClass?: string
// }>(),{
//   customClass: ''
// })

// 其他写法
// const {iconName, customClass} = defineProps<{iconName: string; customClass?: string}>() 

const { iconName, customClass } = defineProps({
  iconName: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  }
})

// const {customClass} = defineProps({
//   customClass: Object as PropType<{a: 1, b:2}>
// })

// 组合自定义类名
const svgClass = computed(() =>  (customClass ? `icon ${customClass}` : 'icon'))
// 判断图标是否为外链
const isExt = computed(() => isExternal(iconName))

// 通过mask渲染svg图标，兼容性不好，可以通过请求svg的方式来渲染
const styleExternalIcon = computed(() => ({
  mask:  `url(${iconName}) norepeat 50% 50%`,
  "-webkit-mask": `url(${iconName}) norepeat 50% 50%`,
  "mask-size": "cover"
}))
// 55566
// 在实现图标的时候，尽量使用svg，不要使用font字体--页面放大会出现锯齿，而且不圆润
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
