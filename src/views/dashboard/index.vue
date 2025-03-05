<template>
  <el-button>button</el-button>
  <div i-ant-design:apple-filled icon></div>
  <svg-icon icon-name="ant-design:apple-filled" custom-class="text-blue-100" @click="handle"></svg-icon>
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