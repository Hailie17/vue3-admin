<template>
  <sidebar-logo v-if="sidebarLogo" :collapse="sidebar.opened"></sidebar-logo>
  <el-menu
    border-none
    class="sidebar-container-menu"
    :default-active="defaultActive"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="theme"
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

const settingsStore = useSettingStore()
const theme = computed(() => settingsStore.settings.theme)
const sidebarLogo = computed(() => settingsStore.settings.sidebarLogo)
</script>
