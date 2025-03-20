<template>
  <!-- 我们需要将路由表中的路径进行添加 index -->
  <template v-if="!item.meta?.hidden">
    <sidebar-item-link
      v-if="filteredChildren.length <= 1 && !item.meta?.alwaysShow"
      :to="resolvePath(singleChildRoute.path)"
    >
      <el-menu-item :index="resolvePath(singleChildRoute.path)">
        <el-icon v-if="iconName">
          <svg-icon :icon-name="iconName" />
        </el-icon>
        <template #title>{{ singleChildRoute.meta?.title }}</template>
      </el-menu-item>
    </sidebar-item-link>
    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon v-if="iconName"> <svg-icon :icon-name="iconName" /> </el-icon>
        <span>{{ item.meta?.title }}</span>
      </template>

      <sidebar-item
        v-for="child of filteredChildren"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      ></sidebar-item>
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'
import path from 'path-browserify'
import { isExternal } from '@/utils/validate'

const { item, basePath } = defineProps<{
  item: RouteRecordRaw
  basePath: string
}>()

// 如果只有一个儿子，说明我们直接渲染这里的一个儿子即可

// 如果菜单对应的children有多个 ，使用el-submenu去渲染

const filteredChildren = computed(() => (item.children || []).filter((child) => !child.meta?.hidden))

// 要渲染的路由  system => children[]
const singleChildRoute = computed(
  () => (filteredChildren.value.length === 1 ? filteredChildren.value[0] : { ...item, path: '' })
  // 此处我们将自己的path置为“” 防止重复拼接
)
// 要渲染的图标
const iconName = computed(() => singleChildRoute.value.meta?.icon)

// 解析父路径 + 子路径  (resolve 可以解析绝对路径
//   /system  /sytem/memu -> /sytem/memu)
//   /  dashboard => /dashboard

const resolvePath = (childPath: string) => {
  if (isExternal(childPath)) {
    return childPath
  }
  return path.join(basePath, childPath)
}
</script>
