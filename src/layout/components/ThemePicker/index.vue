<template>
  <el-color-picker v-model="theme" :predefine="predefineColors"></el-color-picker>
</template>

<script lang="ts" setup>
import { useSettingStore } from '@/stores/setting'
const store = useSettingStore()
const theme = ref(store.settings.theme)
const predefineColors = ['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#c71585']
</script>
