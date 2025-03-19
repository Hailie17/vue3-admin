<template>
  <el-menu-item v-if="filteredChildren.length <= 1" :index="resolvePath(singleChildRoute.path)">
    <el-icon v-if="iconName">
      <svg-icon :icon-name="iconName" />
    </el-icon>
    <template #title>{{ singleChildRoute.meta?.title }}</template>
  </el-menu-item>
  <el-sub-menu v-else :index="item.path">
    <template #title>
      <el-icon v-if="iconName">
        <svg-icon :icon-name="iconName" />
      </el-icon>
      <span>{{ singleChildRoute.meta?.title }}</span>
    </template>
    <sidebar-item
      v-for="child of filteredChildren"
      :base-path="basePath"
      :key="child.path"
      :item="child"
    ></sidebar-item>
  </el-sub-menu>
</template>
<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'
import path from 'path-browserify'
const { item, basePath } = defineProps<{ item: RouteRecordRaw; basePath: string }>()
// 根据路由配置循环
// 如果只有一个子菜单，直接渲染这个子菜单即可
// 如果有多个子菜单，使用el-submenu去渲染
const filteredChildren = computed(() => item.children || [])

// 要渲染的路由
const singleChildRoute = computed(() => (filteredChildren.value.length === 1 ? filteredChildren.value[0] : item))

// 要渲染的图标
const iconName = computed(() => singleChildRoute.value.meta?.icon)

// 解析父路径 + 子路径，resolve可以解析绝对路径 父路径/system 子路径/system/menu
const resolvePath = (childPath: string) => path.resolve(basePath, childPath)
</script>
