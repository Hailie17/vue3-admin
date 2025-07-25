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
  {
    path: '/external-link', //外部链接
    component: Layout,
    children: [
      {
        path: 'http://www.baidu.com',
        redirect: '/',
        meta: {
          icon: 'ant-design:link-outlined',
          title: 'external-baidu',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true,
    },
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
    path: '/test',
    component: Layout, // 不需要动态加载，直接引入组件
    children: [
      {
        path: 'index/:id',
        name: 'test',
        component: () => import('@/views/test/index.vue'),
        meta: {
          icon: 'ant-design:database-filled',
          title: 'test',
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
      alwaysShow: true, // 作为父文件夹一直显示
    },
    children: [
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/system/menu.vue'),
        meta: {
          icon: 'ant-design:unlock-filled',
          title: 'menu',
          hidden: false,
        },
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/system/role.vue'),
        meta: {
          icon: 'ant-design:unlock-filled',
          title: 'role',
          hidden: false,
          breadcrumb: false,
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
