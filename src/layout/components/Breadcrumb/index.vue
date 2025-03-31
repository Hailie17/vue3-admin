<template>
  <el-breadcrumb separator="/" leading-50px text-lg ml-30px inline-block>
    <el-breadcrumb-item v-for="(a, index) in list" :to="a.path">
      <span v-if="index === list.length - 1">{{ a.meta?.title }}</span>
      <a v-else>{{ a.meta?.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { type RouteLocationMatched } from 'vue-router'
const route = useRoute()
const list = ref<Partial<RouteLocationMatched>[]>([])

const getBreadCrumb = () => {
  let matched = route.matched.filter((metch) => metch.meta.title) as Partial<RouteLocationMatched>[]
  if (matched[0].path !== '/dashboard') {
    matched = [
      {
        path: '/dashboard',
        meta: {
          title: 'dashboard',
        },
      },
      ...matched,
    ]
  }
  list.value = matched
}

watch(() => route.path, getBreadCrumb, { immediate: true })
</script>
