<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const confirmar = () => {
  // comprovacions
  const validat = true

  if (validat) {
    router.push({ name: 'account' })
  } else {
    router.back()
  }
}
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div>
      <button @click="confirmar">Confirmar compra!</button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
