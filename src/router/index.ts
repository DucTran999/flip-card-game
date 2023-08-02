import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import MenuPage from '@/pages/MenuPage.vue'
import GamePage from '@/pages/GamePage.vue'
import MissingPage from '@/pages/MissingPage.vue'

const routes = [
  {
    path: '/',
    name: 'home-route',
    component: HomePage
  },
  {
    path: '/menu',
    name: 'menu-route',
    component: MenuPage
  },
  {
    path: '/game',
    name: 'game-route',
    component: GamePage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'missing-route',
    component: MissingPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
