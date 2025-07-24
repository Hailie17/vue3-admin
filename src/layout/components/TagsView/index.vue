<template>
  <div class="tags-view-container">
    <!-- <el-scrollvar w-full whitespace-nowrap>
      <router-link
        class="tags-view-item"
        v-for="(tag, index) in visitedViews"
        :class="{ active: isActive(tag) }"
        :key="index"
        :to="{ path: tag.path, query: tag.query }"
        :style="{ backgroundColor: isActive(tag) ? theme : '', borderColor: isActive(tag) ? theme : '' }"
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
    </el-scrollvar> -->
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from '@/stores/setting'
// import { useTagsView } from '@/stores/tagsView'
// import { RouteLocationNormalizedGeneric, RouteRecordRaw } from 'vue-router'
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
  Refresh = 'refresh',
}
const handleCommand = (command, view) => {
  switch (command) {
    case CommandType.Other:
      deleteOtherView(view)
      if (!isActive(view)) {
        router.push(view.path)
      }
      break
    case CommandType.Self:
      closeSelectedTag(view)
      break
    case CommandType.Refresh:
      // 跳转到专门做刷新的路由，再通过这个路由回来即可
      deleteCacheView(view)
      router.push('/redirect' + view.path)
      break
  }
}
const settingsStore = useSettingStore()
const theme = computed(() => settingsStore.settings.theme)
</script>

<style scoped>
.tags-view-container {
  @apply w-full overflow-hidden @apply h-[var(--tagsview-height)] shadow-sm shadow-gray-300;
}
.tags-view-item {
  @apply inline-block h-28px leading-28px border-solid border-gray px-3px box-border;
  &.active {
    @apply text-white border-none;
    &::before {
      content: '';
      @apply inline-block w-8px h-8px rounded-full bg-white mr-3px;
    }
  }
}
</style>
