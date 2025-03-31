<template>
  <el-breadcrumb separator="/" leading-50px text-lg ml-30px inline-block>
    <el-breadcrumb-item v-for="(a, index) in arr">
      <span v-if="index === arr.length - 1">{{ a }}</span>
      <a v-else>{{ a }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
const arr = [1, 2, 3]
</script>
