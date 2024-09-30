<script setup lang="ts">
const props = defineProps({
  usuari: { type: Object, required: true },
  usuaris: { type: Array, required: true }
})

const calcularRankingDeLUsuari = () => {
  return Math.ceil(props.usuari.id * Math.random() * 100)
}

const totalPunts = () => {
  return Math.ceil(props.usuaris.length * 1000 * Math.random())
}
</script>

<template>
  <div>Tens {{ calcularRankingDeLUsuari() }} punts de {{ totalPunts() }}</div>
</template>
