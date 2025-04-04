import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import ManageFavorites from '@/views/ManageFavorites.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/manage', name: 'ManageFavorites', component: ManageFavorites },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
