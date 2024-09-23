import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/diary',
      name: 'diary',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DiaryView.vue')
    },
    {
      path: '/diary/year',
      name: 'diaryyear',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Diary/YearView.vue')
    },
    {
      path: '/colors',
      name: 'colors',
      component: () => import('../views/ColorsView.vue')
    }
  ]
})

export default router
