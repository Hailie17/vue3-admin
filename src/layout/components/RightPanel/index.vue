<!-- 右侧setting抽屉组件 -->
<template>
  <el-drawer :model-value="modelValue" :direction="direction" :title="title" @close="handelClose">
    <slot></slot>
  </el-drawer>
</template>

<script lang="ts" setup>
import type { DrawerProps } from 'element-plus'
import { type PropType } from 'vue'

defineProps({
  // 是否显示
  modelValue: {
    type: Boolean,
    default: false,
  },
  // 抽屉方向
  direction: {
    type: String as PropType<DrawerProps['direction']>,
    default: 'rtl',
  },
  title: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])
const handelClose = () => {
  emit('update:modelValue', false)
}
</script>
