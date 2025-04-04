<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/manage">Gerenciar Favoritos</router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
// nada aqui
</script>

<style>

nav {
  padding: 1rem;
  background-color: #333;
  display: flex;
  gap: 1rem;
}

a {
  color: white;
  text-decoration: none;
}

#app {
  min-height: 100vh; /* Garante que ocupa toda a tela */
  width: 100vw; /* Ocupa toda a largura */
  background-color: gray;
  color: white;
  display: flex;
  justify-content: center; /* Centraliza o conteúdo */
  align-items: center; /* Centraliza verticalmente */
}
</style>
