<template>
  <div class="tags-view-container">
    <el-scrollvar w-full whitespace-nowrap>
      <router-link
        class="tags-view-item"
        v-for="(tag, index) in visitedViews"
        :class="{ active: isActive(tag) }"
        :key="index"
        :to="{ path: tag.path, query: tag.query }"
      >
        <el-dropdown
          palcement="top-start"
          trigger="contextmenu"
          @command="(command) => handleCommand(handleCommand, tag)"
        >
          <span leading-28px>{{ (tag as any).title }}</span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="all">关闭所有</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </router-link>
    </el-scrollvar>
  </div>
</template>

<script lang="ts" setup>
import { useTagsView } from '@/stores/tagsView'
import { RouteLocationNormalizedGeneric, RouteRecordRaw } from 'vue-router'
import { join } from 'path-browserify'

const store = useTagsView()

const { deleteView, addView, delAllView, deleteOtherView, deleteCacheView } = store

// 必须采用storeToRefs进行解构出来
const { visitedViews } = storeToRefs(store)

import { routes } from '@/router/index'
const router = useRouter()
const route = useRoute()
const isActive = (tag: RouteLocationNormalizedGeneric) => {
  return tag.path === route.path
}
function isAffix(tag: RouteLocationNormalizedGeneric) {
  return !tag.meta?.affix
}
const addTags = () => {
  if (route.name) {
    // 需要添加到tags中
    addView(route)
  }
}
const toLastView = () => {
  const lastView = visitedViews.value[visitedViews.value.length - 1]
  if (lastView) {
    router.push(lastView.path)
  } else {
    router.push('/')
  }
}
const closeSelectedTag = (tag: RouteLocationNormalizedGeneric) => {
  //..
  deleteView(tag)
  if (isActive(tag)) {
    //如果删了自己，需导航到当前list中的最后一个
    toLastView()
  }
}

// 此方法用于计算 哪些tag应;该默认展示在列表中
function filterAffix(routes: RouteRecordRaw[], basePath = '/') {
  const tags: RouteLocationNormalizedGeneric[] = []
  for (let route of routes) {
    if (route.meta?.affix) {
      tags.push({
        name: route.name,
        path: join(basePath, route.path),
        meta: route.meta,
      } as RouteLocationNormalizedGeneric)
    }
    if (route.children) {
      tags.push(...filterAffix(route.children, route.path))
    }
  }
}

// 页面加载后 需要初始化固定 + 默认当前路径的
onMounted(() => {
  initTags()
})
// 路径变化时重新添加
watch(() => route.path, addTags)
// 点击菜单
const enum CommandType {
  All = 'all',
  Other = 'other',
  Self = 'self',
  Refresh = 'refresh'
}
const handleCommand = {
  command: CommandType,
  view: RouteLocationNormalizedGeneric
} => {
  switch (command) {
    case value:

      break;

    default:
      break;
  }
}
</script>
