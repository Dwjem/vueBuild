import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '01_',
    component: () => import(/* webpackChunkName: "about" */ '../views/01_/01_.vue')
  },
  {
    path: '/chuancan',
    name: 'chuancan',
    component: () => import(/* webpackChunkName: "about" */ '../views/chuancan/chuancan.vue')
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import(/* webpackChunkName: "about" */ '../views/todoList/todoList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
