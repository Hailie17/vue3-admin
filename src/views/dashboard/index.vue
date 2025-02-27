<template>
  <el-button>button</el-button>
  <el-button @click="handle">open</el-button>
</template>

<script lang="ts" setup>
// 服务型组件 放到 示例上调用
const { proxy } = getCurrentInstance()!
const handle = () => {
  proxy?.$message('Hi My dear')
}

const res = ref(0)
console.log('res', res.value);

</script>