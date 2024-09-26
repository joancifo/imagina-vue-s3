import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/usuari',
      name: 'perfil-index',
      component: () => import('@/views/PerfilLlistaView.vue'),
      beforeEnter: () => {
        // const token = sessionStorage.getItem('access_token')
        const token = 'adasdasdad.asdasdasd'

        if (!token) {
          return {
            name: 'home'
          }
        }
      }
    },
    {
      path: '/usuari/:id',
      name: 'perfil',
      component: () => import('@/views/PerfilView.vue')
    }
  ]
})

export default router
