<script setup lang="ts"></script>
<template>
  <div style="border: solid black 2px; padding: 20px; border-radius: 3em; background-color: #eee">
    <ul style="display: flex; gap: 20px; list-style: none">
      <li>
        <RouterLink :to="{ name: 'account' }">Perfil</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'account-compres' }">Compres</RouterLink>
      </li>
    </ul>

    <RouterView />

    <div>Pensa a actualitzar les teves dades abans del dijous!</div>
  </div>
</template>
