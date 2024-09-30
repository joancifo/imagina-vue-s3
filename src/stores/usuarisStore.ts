import httpClient from '@/plugins/httpClient'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsuarisStore = defineStore('usuaris', () => {
  const usuaris = ref([])

  // const carregarUsuarisThen = () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((response) => {
  //       usuaris.value = response
  //       console.log(usuaris.value)
  //     })
  //     .catch((error) => console.log({ error }))
  // }

  const carregarUsuarisFetchAwait = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer TOKEN'
        }
      })
      usuaris.value = await response.json()
    } catch (error) {
      console.log({ error })
    }
  }

  const carregarUsuarisAxios = async () => {
    const { data } = await httpClient.get('/users')
    usuaris.value = data
  }

  return {
    usuaris,
    carregarUsuarisAxios,
    carregarUsuarisFetchAwait
  }
})
