<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const { query } = useRoute()
console.log(query)

const usuaris = ref<any[]>([])

const carregarUsuaris = async () => {
  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => response.json())
  //   .then((response) => {
  //     usuaris.value = response
  //     console.log(usuaris.value)
  //   })
  //   .catch((error) => console.log({ error }))
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    usuaris.value = await response.json()

    // console.log(usuaris.value)
  } catch (error) {
    console.log({ error })
  }
}

carregarUsuaris()
</script>
<template>
  <div>
    <h1>Llista d'usuaris</h1>
    <ul v-if="usuaris.length">
      <li v-for="usuari in usuaris" :key="usuari.id">
        <div>
          <h5>
            {{ usuari.name }}
            <RouterLink :to="{ name: 'perfil', params: { id: usuari.id } }">
              Anar al perfil
            </RouterLink>
          </h5>
          <div>
            <ul>
              <li v-for="(valor, clau) in usuari" :key="clau">{{ clau }}: {{ valor }}</li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <div v-else>No hi ha cap usuari</div>
  </div>
</template>
