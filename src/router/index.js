import { createRouter, createWebHistory } from 'vue-router'
import HeroView from "../views/HeroView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            // name: 'hero',
            component: HeroView
        },
        {
            path: '/resume',
            // name: 'resume',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/ResumeView.vue')
        }
    ]
})

export default router
