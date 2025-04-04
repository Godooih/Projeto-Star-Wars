<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/manage">Gerenciar Favoritos</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// nada aqui
</script>

<style scoped>
#app {
  min-height: 100vh;
  width: 100vw;
  background-color: gray;
  color: white;
  display: flex;
  flex-direction: column; /* importante */
}

nav {
  padding: 1rem;
  background-color: #333;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

a {
  color: white;
  text-decoration: none;
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 2rem;
}
</style>
