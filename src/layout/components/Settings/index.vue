<template>
  <div class="drawer-item">
    <span>主题色</span>
    <theme-picker></theme-picker>
  </div>
  <div class="drawer-item">
    <span>是否展示TagsView</span>
    <el-switch v-model="tagsView"></el-switch>
  </div>
  <div class="drawer-item">
    <span>是否展示Logo</span>
    <el-switch v-model="isShowLogo"></el-switch>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from '@/stores/setting'
const settingsStore = useSettingStore()
const isShowTagsView = computed(() => settingsStore.settings.tagsView)
const sidebarLogo = computed(() => settingsStore.settings.sidebarLogo)
const tagsView = computed({
  get() {
    return isShowTagsView.value
  },
  set(val: boolean) {
    settingsStore.changeSetting({ key: 'tagsView', value: val })
  },
})
const isShowLogo = computed({
  get() {
    return sidebarLogo.value
  },
  set(val: boolean) {
    settingsStore.changeSetting({ key: 'sidebarLogo', value: val })
  },
})
</script>
