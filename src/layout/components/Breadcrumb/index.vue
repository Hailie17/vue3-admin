<template>
  <el-breadcrumb separator="/" leading-50px text-lg ml-30px inline-block>
    <!-- a.path 可能是路由参数导航 /test/index/:id -->
    <el-breadcrumb-item v-for="(route, index) in list">
      <span v-if="index === list.length - 1">{{ route.meta?.title }}</span>
      <a v-else @click="handleLink(route)">{{ route.meta?.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import router from '@/router'
import { type RouteLocationMatched } from 'vue-router'
import { compile } from 'path-to-regexp'
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
  list.value = matched.filter((match) => match.meta?.breadcrumb !== false)
}

watch(() => route.path, getBreadCrumb, { immediate: true })

// 需要根据面包屑导航 + 当前访问路径 = 跳转路径
function compilePath(path: string) {
  const params = route.params
  const resultPath = compile(path)(params)
  return resultPath
}

function handleLink(route: Partial<RouteLocationMatched>[]) {
  const { path, redirect } = route

  if (redirect) {
    return router.push(redirect as string)
  }
  router.push(compilePath(path!))
}
</script>
