import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/form'
    },
    {
      path: '/form',
      name: 'formRoute',
      component: () => import('@/pages/FormPage.vue'),
    },
    {
      path: '/result',
      name: 'resultRoute',
      component: () => import('@/pages/ResultPage.vue'),
    },
  ],
})

export default router
