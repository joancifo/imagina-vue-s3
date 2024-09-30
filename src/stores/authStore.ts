import httpClient from '@/plugins/httpClient'
import { defineStore } from 'pinia'
import { computed, ref, type ComputedRef, type Ref } from 'vue'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const usuari: any = ref<any>({
      authToken: '',
      nom: ''
    })

    const teSessioIniciada: ComputedRef<boolean> = computed<boolean>(
      () => usuari.value.authToken !== ''
    )

    const login = async (username: string, contrasenya: string) => {
      try {
        const { data }: any = await httpClient.post('/users', {
          username,
          contrasenya
        })
        //   authToken.value = response.auth_token
        usuari.value.authToken = data.username // fake token
        usuari.value.nom = data.username // fake username
      } catch (error) {
        console.log({ error }, 'Error amb login!')
      }
    }

    const logout = () => {
      usuari.value.authToken = ''
      usuari.value.nom = ''
    }

    return {
      usuari,
      teSessioIniciada,
      login,
      logout
    }
  },
  {
    persist: {
      storage: localStorage
    }
  }
)
