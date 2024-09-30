<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useTitle } from './hooks/useTitle'
import { useUsuarisStore } from './stores/usuarisStore'

const usuarisStore = useUsuarisStore()

const usuariId = ref<number>(Math.ceil(Math.random() * 100))

useTitle()
</script>

<template>
  <div v-if="usuarisStore.usuaris.length">
    Ja tens {{ usuarisStore.usuaris.length }} usuaris a l'aplicació!
  </div>
  <div>Usuaris no carregats</div>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }">Sobre nosaltres</RouterLink>
        <RouterLink :to="{ name: 'usuari-llista' }">Llista d'usuaris</RouterLink>
        <RouterLink :to="{ name: 'usuari-detall', params: { id: usuariId } }"
          >Perfil aleatori</RouterLink
        >
        <RouterLink :to="{ name: 'account' }">El meu compte</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
