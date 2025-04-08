<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <svg-icon custom-class="w-2em h-2em" icon-name="ant-design:font-size-outlined"></svg-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in sizeOptions" :key="item">{{ item.label }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
const sizeOptions = ref([
  {
    label: 'Default',
    value: 'default',
  },
  {
    label: 'Large',
    value: 'large',
  },
  {
    label: 'Small',
    value: 'small',
  },
])
</script>
