<template>
  <div class="navbar" flex>
    <hamburger @toggleCollapse="toggleSidebar" :collapse="sidebar.opened"></hamburger>
    <breadcrumb></breadcrumb>
    <div flex justify-end flex-1 items-center mr-20px>
      <screenfull mx-5px></screenfull>
      <el-tooltip content="ChangeSize" placement="bottom">
        <size-select></size-select>
      </el-tooltip>
      <svg-icon @click="openShowSettings" icon-name="ant-design:setting-outlined" size-2em></svg-icon>
      <avator></avator>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
// 结构时要考虑值是不是对象，非对象结构会丧失响应式
const { toggleSidebar, sidebar } = useAppStore()
// const collapse = ref(false)
// const handleCollapse = () => {
//   collapse.value = !collapse.value
// }
// const emit = defineEmits<{(event: "showSettings", isShow: boolean): void}>()
const emit = defineEmits<{
  (event: 'showSettings', isShow: boolean): void
}>()
const openShowSettings = () => {
  emit('showSettings', true)
}
</script>

<style lang="scss" scoped>
.navbar {
  @apply h-[var(--navbar-height)];
}
</style>
