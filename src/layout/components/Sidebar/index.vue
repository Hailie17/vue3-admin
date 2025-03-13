<template>
  <el-menu router default-active="/dashboard" :background-color="variables.menuBg" :text-color="variables.menuText" :active-text-color="variables.menuActiveText">
    <el-menu-item index="/dashboard">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup> 
  import variables from '@/style/variables.module.scss'
</script>