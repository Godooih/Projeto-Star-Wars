<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/manage">Gerenciar Favoritos</router-link>
    </nav>
    <router-view />
  </template>
  
  <style scoped lang="scss">
  nav {
    display: flex;
    gap: 20px;
    background: blue;
    padding: 10px;
  
    a {
      color: grey;
      text-decoration: none;
      font-weight: bold;
    }
  }
  </style>
  