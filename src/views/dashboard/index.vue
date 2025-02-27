<template>
  <el-button>button</el-button>
  <el-button @click="handle">open</el-button>
</template>

<script lang="ts" setup>
// 服务型组件 放到 示例上调用
import { ElMessage } from 'element-plus'
const handle = () => {
  ElMessage('Hi My dear')
}

const res = ref(0)
console.log('res', res.value);

</script>