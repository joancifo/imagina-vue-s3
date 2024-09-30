<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { ref, type Ref } from 'vue'
import router from '@/router'

const authStore = useAuthStore()

const usuari: Ref<string> = ref<string>('')
const password: Ref<string> = ref<string>('')

const handleLogin = async () => {
  await authStore.login(usuari.value, password.value)

  router.replace('/')
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
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
