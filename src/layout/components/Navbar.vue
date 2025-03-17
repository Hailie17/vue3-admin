<template>
  <div class="navbar">
    <hamburger @toggleCollapse="toggleSidebar" :collapse="sidebar.opened"></hamburger>
    <div></div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
// 结构时要考虑值是不是对象，非对象结构会丧失响应式
const { toggleSidebar, sidebar } = useAppStore()
// const collapse = ref(false)
// const handleCollapse = () => {
//   collapse.value = !collapse.value
// }
</script>

<style lang="scss" scoped>
.navbar {
  @apply h-[var(--navbar-height)];
}
</style>
