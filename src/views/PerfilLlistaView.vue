<script setup lang="ts">
import { ref } from 'vue'

const usuaris = ref<any[]>([])

const carregarUsuaris = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      usuaris.value = response
    })
    .catch((error) => {
      console.log({ error })
    })

  // console.log(response)

  // usuaris.value = resultat
}

carregarUsuaris()
</script>
<template>
  <div>
    <h1>Llista d'usuaris</h1>
    <ul v-if="usuaris.length">
      <li v-for="usuari in usuaris" :key="usuari.id">{{ usuari.name }} {{ usuari.phone }}</li>
    </ul>
    <div v-else>No hi ha cap usuari</div>
  </div>
</template>
