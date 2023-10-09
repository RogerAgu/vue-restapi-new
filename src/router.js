/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/vue-restapi-new/', name: 'Home', component: HomePage },
  {
    path: '/locations',
    name: 'Place',
    component: () => import('@/views/LocationDetails.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
