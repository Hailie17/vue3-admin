import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout, // 不需要动态加载，直接引入组件
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          icon: 'ant-design:bank-outlined',
          title: 'dashboard',
        },
      },
    ],
  },
]

const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/documentation',
    component: Layout, // 不需要动态加载，直接引入组件
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        name: 'documentation',
        component: () => import('@/views/documentation/index.vue'),
        meta: {
          icon: 'ant-design:database-filled',
          title: 'documentation',
        },
      },
    ],
  },
  {
    path: '/XXX',
    component: Layout, // 不需要动态加载，直接引入组件
    meta: {
      hidden: true,
    },
  },
  {
    path: '/guide',
    component: Layout, // 不需要动态加载，直接引入组件
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        name: 'guide',
        component: () => import('@/views/guide/index.vue'),
        meta: {
          icon: 'ant-design:car-twotone',
          title: 'guide',
        },
      },
    ],
  },
  {
    path: '/system',
    component: Layout, // 不需要动态加载，直接引入组件
    redirect: '/system/menu',
    meta: {
      icon: 'ant-design:unlock-filled',
      title: 'system',
    },
    children: [
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/system/menu.vue'),
        meta: {
          icon: 'ant-design:unlock-filled',
          title: 'menu',
          hidden: true,
        },
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/system/role.vue'),
        meta: {
          icon: 'ant-design:unlock-filled',
          title: 'role',
          hidden: true,
        },
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/system/user.vue'),
        meta: {
          icon: 'ant-design:unlock-filled',
          title: 'user',
          hidden: true,
        },
      },
    ],
  },
]

export const routes = [...constantRoutes, ...asyncRoutes]

export default createRouter({
  routes, // 路由表
  history: createWebHistory(), //路由模式
})
