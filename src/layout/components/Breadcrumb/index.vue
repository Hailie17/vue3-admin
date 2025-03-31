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
  list.value = matched.filter((match) => match.meta?.breadcrumb !== false)
}

watch(() => route.path, getBreadCrumb, { immediate: true })

function compile(path: string) {
  const params = route.params
}

function handleLink(route: Partial<RouteLocationMatched>[]) {
  const { path } = route
  const link = compile(path)
  route.push(link)
}
</script>
