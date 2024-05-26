import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/resume',
      component: () => import('../views/ResumeView.vue')
    }
  ]
})

export default router
