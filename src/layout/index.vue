<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar></sidebar>
    </div>
    <div class="main-container">
      <div class="header">
        <!-- 导航条 -->
        <navbar @showSettings="openSetting"></navbar>
        <tags-view v-if="isShowTagsView"></tags-view>
        <div class="tags-view">导航条2</div>
      </div>
      <!-- 核心渲染部分 -->
      <div class="app-main">
        <router-view></router-view>
      </div>
    </div>
    <!-- 增加抽屉组件，根据navbar内容切换 -->
    <right-panel v-model="setting" title="设置">
      <!-- 设置功能 -->
      <Settings></Settings>
    </right-panel>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from '@/stores/setting'
import variables from '@/style/variables.module.scss'

const setting = ref(false)
const openSetting = () => {
  setting.value = true
}

const settingsStore = useSettingStore()
const isShowTagsView = computed(() => settingsStore.settings.tagsView)

const outerHeight = computed(() => {
  return (
    (isShowTagsView.value
      ? parseInt(variables.navBarHeight) + parseInt(variables.tagsViewHeight)
      : parseInt(variables.navBarHeight)) + 'px'
  )
})
</script>

<style lang="scss" scoped>
.app-wrapper {
  @apply flex w-full h-full;
  .sidebar-container {
    @apply bg-[var(--menu-bg)];
    .sidebar-container-menu:not(.el-menu--collapse) {
      @apply w-[var(--sidebar-width)];
    }
  }
  .main-container {
    @apply flex flex-col flex-1;
    .header {
      @apply h-84px;
      .navbar {
        @apply h-[var(--navBar-height)] bg-yellow;
      }
      .tags-view {
        @apply h-[var(--tagsview-height)] bg-blue;
      }
    }
  }
  .app-main {
    @apply bg-cyan;
    min-height: calc(100vh - v-bind(outerHeight));
  }
}
</style>
