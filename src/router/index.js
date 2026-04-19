import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/artists',
      name: 'artists',
      component: () => import('@/views/ArtistsView.vue'),
    },
    {
      path: '/artists/:slug',
      name: 'artist-detail',
      component: () => import('@/views/ArtistDetailView.vue'),
      props: true,
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/AuthView.vue'),
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('@/views/FavoritesView.vue'),
    },
  ],
})

export default router
