<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/manage">Gerenciar Favoritos</router-link>
      <h1>Olá, Vue está rodando!</h1>
    </nav>
    <router-view />
  </template>
  
  <style>
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
  