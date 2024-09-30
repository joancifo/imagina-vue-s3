<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { ref, type Ref } from 'vue'

const authStore = useAuthStore()

const usuari: Ref<string> = ref<string>('')
const password: Ref<string> = ref<string>('')
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="authStore.login(usuari, password)">
      <input v-model="usuari" type="text" name="usuari" placeholder="Usuari" required />
      <input
        v-model="password"
        type="password"
        name="password"
        id="password"
        placeholder="Contrasenya"
        required
      />
      <button type="submit">Iniciar sessió</button>
    </form>
  </div>
</template>
