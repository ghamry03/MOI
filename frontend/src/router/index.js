import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import Service from '../views/ServicePage.vue'

const routes = [
  { path: '/', name: 'Home', component: LandingPage },
  { path: '/service', name: 'Service', component: Service },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
