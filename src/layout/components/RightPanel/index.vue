<!-- 右侧setting抽屉组件 -->
<template>
  <el-drawer></el-drawer>
</template>

<script lang="ts" setup>
import type { DrawerProps } from 'element-plus'
import { PropType } from 'vue'

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String as PropType<DrawerProps['direction']>,
  },
})
</script>
