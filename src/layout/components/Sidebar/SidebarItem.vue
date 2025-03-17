<template>
  <el-menu-item index="/dashboard">
    <el-icon><setting /></el-icon>
    <template #title>{{ item.path }}</template>
  </el-menu-item>
</template>
<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'
defineProps<{ item: RouteRecordRaw }>()
</script>
