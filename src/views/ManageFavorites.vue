<template>
    <div class="container">
      <h1>Personagens Favoritos</h1>
      <p>Aqui serão exibidos os personagens favoritos</p>
  
      <div v-if="favorites.length > 0" class="favorites-list">
        <CharacterCard
          v-for="(person, index) in favorites"
          :key="index"
          :character="person"
          :toggleFavorite="() => removeFavorite(person)"
        />
      </div>
      <p v-else>Nenhum personagem foi favoritado ainda.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import CharacterCard from '../components/CharacterCard.vue';
  
  // Simulação de favoritos (depois será integrado com Pinia ou localStorage)
  const favorites = ref<any[]>([]);
  
  const removeFavorite = (person: any) => {
    favorites.value = favorites.value.filter((fav) => fav.name !== person.name);
    console.log('Removido dos favoritos:', person.name);
  };
  </script>
  
  <style scoped lang="scss">
  .container {
    text-align: center;
    padding: 2rem;
    color: white;
  }
  
  h1 {
    color: red;
  }
  
  .favorites-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  </style>
  