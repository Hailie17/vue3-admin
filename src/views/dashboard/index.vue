<template>
  <div>
    <el-button>button</el-button>
    <div i-ant-design:apple-filled icon></div>
    <svg-icon icon-name="ant-design:apple-filled" custom-class="text-blue-100" @click="handle"></svg-icon>
    <svg-icon icon-name="token-branded:1art" custom-class="text-red" @click="handle"></svg-icon>
    <svg-icon icon-name="token-branded:1art" :custom-class="`text-blue-100 ${val}`" @click="handle"></svg-icon>
  </div>
</template>

<script lang="ts" setup>
// 服务型组件 放到 示例上调用
const { proxy } = getCurrentInstance()!
const handle = () => {
  proxy?.$message('Hi My dear')
}

const val = ref('bg-red')

setTimeout(() => {
  val.value = 'bg-blue-100'
}, 1000)
</script>
