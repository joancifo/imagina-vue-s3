<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import httpClient from '@/plugins/httpClient'
import UsuariLlistaItem from '@/components/Usuari/UsuariLlistaItem.vue'

const { query } = useRoute()
console.log(query)

const carregat = ref(false)
const cerca = ref(query.name?.toLowerCase())
const usuaris = ref<any[]>([])
const usuarisFiltrats = computed(() => {
  let resultat = usuaris.value

  if (cerca.value) {
    resultat = resultat.filter((usuari) => {
      const usuariName = usuari.name.toLowerCase()
      const queryName = cerca.value.toLowerCase()

      return usuariName.includes(queryName)
    })
  }

  return resultat
})

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
    // console.log(usuaris.value)
  } catch (error) {
    console.log({ error })
  }
}

const carregarUsuarisAxios = async () => {
  const { data } = await httpClient.get('/users')
  usuaris.value = data

  carregat.value = true
  // console.log(response)
}

onMounted(() => {
  carregarUsuarisAxios()
})
</script>
<template>
  <div>
    <h1>Llista d'usuaris</h1>
    <div>
      <input v-model="cerca" type="text" placeholder="Cerca per nom" />
    </div>
    <ul v-if="usuarisFiltrats.length">
      <UsuariLlistaItem
        v-for="(usuari, index) in usuarisFiltrats"
        :key="usuari.id"
        :item="usuari"
        :index="index + 1"
        :usuaris="usuarisFiltrats"
      />
    </ul>
    <div v-else-if="carregat">No hi ha cap usuari</div>
    <div v-else>Carregant, spinner, etc</div>
  </div>
</template>
