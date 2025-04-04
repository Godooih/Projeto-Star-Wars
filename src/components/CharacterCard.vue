<template>
    <div class="card">
      <div class="info">
        <h3>{{ character.name }}</h3>
        <p><strong>Altura:</strong> {{ character.height }} cm</p>
        <p><strong>Peso:</strong> {{ character.mass }} kg</p>
        <p><strong>Nascimento:</strong> {{ character.birth_year }}</p>
        <button @click="toggleFavorite">Favoritar</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
defineProps<{
    character: any;
    toggleFavorite: () => void;
  }>();
  </script>
  
  <style scoped>
.card {
  background-color: #1a1a1a;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  width: 200px;
}
</style>
  