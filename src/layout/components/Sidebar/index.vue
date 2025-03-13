<template>
  <el-menu router default-active="'/dashboard'" :background-color="varaibles.menuBg" :text-color="varaibles.menuText" :active-text-color="varaibles.menuActiveText">
    <el-menu-item index="/dashboard">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup> 
  import varaibles from '@/style/variables.module.scss'
</script>