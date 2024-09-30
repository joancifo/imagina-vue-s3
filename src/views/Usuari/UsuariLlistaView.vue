<script setup lang="ts">
import UsuariLlistaItem from '@/components/Usuari/UsuariLlistaItem.vue'
import { useUsuarisStore } from '@/stores/usuarisStore'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const usuarisStore = useUsuarisStore()

const { query } = useRoute()

const carregat = ref(false)
const cerca = ref(query.name?.toLowerCase())

const usuarisFiltrats = computed(() => {
  let resultat = usuarisStore.usuaris

  if (cerca.value) {
    resultat = resultat.filter((usuari) => {
      const usuariName = usuari.name.toLowerCase()
      const queryName = cerca.value.toLowerCase()

      return usuariName.includes(queryName)
    })
  }

  return resultat
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
