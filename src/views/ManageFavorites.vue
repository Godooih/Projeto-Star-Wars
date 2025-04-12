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
        buttonLabel="Remover"
      />
    </div>
    <p v-else>Nenhum personagem foi favoritado ainda.</p>
  </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favorites';
import { storeToRefs } from 'pinia';
import CharacterCard from '../components/CharacterCard.vue';

const favoritesStore = useFavoritesStore();
const { favorites } = storeToRefs(favoritesStore);

const removeFavorite = (person: any) => {
  favoritesStore.removeFavorite(person);
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
