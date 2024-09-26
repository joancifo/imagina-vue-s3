import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/usuari',
      name: 'perfil-index',
      component: () => import('@/views/PerfilLlistaView.vue'),
      meta: {
        requireAuth: true
      }
      // beforeEnter: () => {
      //   // const token = sessionStorage.getItem('access_token')
      //   const token = 'adasdasdad.asdasdasd'

      //   if (!token) {
      //     return {
      //       name: 'home'
      //     }
      //   }
      // }
    },
    {
      path: '/usuari/:id',
      name: 'perfil',
      component: () => import('@/views/PerfilView.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/account',
      name: 'account',
      children: [
        {
          path: 'compres',
          name: 'account-compres',
          component: () => import('@/views/Account/AccountCompres.vue')
        }
      ],
      component: () => import('@/views/Account/Account.vue'),
      meta: {
        requireAuth: true
      }
    }
  ]
})

router.beforeEach((to: any, from) => {
  if (to.meta.requireAuth) {
    // const token = sessionStorage.getItem('access_token')
    const token = 'adasdasdad.asdasdasd'

    if (!token) {
      return {
        name: 'home'
      }
    }
  }
})

export default router
