import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/challenge',
      name: 'challenge',
      children: [
        {
          path: '1',
          name: 'challenge 1',
          component: routes.challenge1,
        },
      ],
    },
  ],
})

export default router
