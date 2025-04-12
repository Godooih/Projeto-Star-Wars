// src/stores/favorites.ts
import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as any[]
  }),
  actions: {
    addFavorite(character: any) {
      if (!this.favorites.find(fav => fav.name === character.name)) {
        this.favorites.push(character);
      }
    },
    removeFavorite(character: any) {
      this.favorites = this.favorites.filter(fav => fav.name !== character.name);
    },
  },
});
