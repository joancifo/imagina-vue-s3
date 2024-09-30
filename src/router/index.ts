import { useAuthStore } from '@/stores/authStore'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Pàgina principal'
      }
    },
    {
      path: '/iniciar-sessio',
      name: 'iniciar-sessio',
      component: () => import('@/views/LoginView.vue'),
      beforeEnter: () => {
        const authStore = useAuthStore()

        if (authStore.authToken) {
          return {
            name: 'home'
          }
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'Sobre nosaltres'
      }
    },
    {
      path: '/usuari',
      name: 'usuari',
      children: [
        {
          path: '',
          name: 'usuari-llista',
          component: () => import('@/views/Usuari/UsuariLlistaView.vue')
        },
        {
          path: ':id',
          name: 'usuari-detall',
          component: () => import('@/views/Usuari/UsuariDetallView.vue')
        }
      ],
      component: () => import('@/views/Usuari/UsuariView.vue'),
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

router.beforeEach((to: any) => {
  const authStore = useAuthStore()

  if (to.meta.requireAuth && !authStore.authToken) {
    return {
      name: 'iniciar-sessio'
    }
  }
})

export default router
