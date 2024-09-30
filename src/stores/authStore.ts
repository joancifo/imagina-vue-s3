import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import httpClient from '@/plugins/httpClient'

export const useAuthStore = defineStore('auth', () => {
  const authToken: Ref<string | undefined> = ref<string>()

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

  return {
    authToken,
    login
  }
})
