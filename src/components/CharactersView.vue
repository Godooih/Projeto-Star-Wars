<template>
    <div class="container">
      <h1>Personagens</h1>
      <p>Aqui serão exibidos os personagens</p>
  
      <div class="characters-list">
        <CharacterCard
          v-for="(person, index) in characters"
          :key="index"
          :character="person"
          :toggleFavorite="() => addToFavorites(person)"
          buttonLabel=""
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import CharacterCard from '../components/CharacterCard.vue';
  import { useFavoritesStore } from '@/stores/favorites';
  
  const characters = ref<any[]>([]);
  const favoritesStore = useFavoritesStore();
  
  const addToFavorites = (person: any) => {
    favoritesStore.addFavorite(person);
  };
  
  onMounted(async () => {
    const res = await fetch('https://swapi.dev/api/people/');
    const data = await res.json();
    characters.value = data.results;
  });
  </script>
  
  <style scoped lang="scss">
  .container {
    text-align: center;
    padding: 2rem;
    color: white;
  }
  
  .characters-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }
  </style>
  