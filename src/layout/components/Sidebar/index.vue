<template>
  <el-menu
    router
    class="sidebar-container-menu"
    :default-active="defaultActive"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    :collapse="sidebar.opened"
  >
    <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
    <!-- 增加父路径，用于el-menu-item渲染时拼接 -->
  </el-menu>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import variables from '@/style/variables.module.scss'
import { routes } from '@/router'

const route = useRoute()
const defaultActive = computed(() => {
  return route.path
})

const { sidebar } = useAppStore()
// const collapse = ref(false)
</script>
