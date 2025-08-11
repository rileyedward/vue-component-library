import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/home-page.vue';
import ButtonPage from '@/pages/button-page.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonPage,
    },
  ],
});

export default router;
