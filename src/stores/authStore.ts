import httpClient from '@/plugins/httpClient'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const authToken: Ref<string> = ref<string>('')

    const login = async (usuari: string, contrasenya: string) => {
      try {
        const { data }: any = await httpClient.post('/users', {
          usuari,
          contrasenya
        })
        //   authToken.value = response.auth_token
        authToken.value = data.usuari // fake token
      } catch (error) {
        console.log({ error }, 'Error amb login!')
      }
    }

    const logout = () => {
      authToken.value = ''
    }

    return {
      authToken,
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
