<script setup lang="ts">
import ClassificacioUsuaris from './ClassificacioUsuaris.vue'

defineProps({
  item: { type: Object, required: true },
  index: { type: Number, required: true },
  usuaris: { type: Array, required: true }
})
</script>
<template>
  <li>
    <div>
      <h5>
        {{ item.name }}
        <RouterLink :to="{ name: 'usuari-detall', params: { id: item.id } }">
          Anar al perfil
        </RouterLink>
      </h5>
      <div>
        <ul>
          <li v-for="(valor, clau) in item" :key="clau">{{ clau }}: {{ valor }}</li>
          <ClassificacioUsuaris :usuari="item" :usuaris="usuaris" />
        </ul>
      </div>
    </div>
  </li>
</template>
