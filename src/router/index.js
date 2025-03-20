import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/HelloWorld.vue';
import Login from '../components/pages/LoginComponent.vue';
import DetalheCursoComponent from '@/components/pages/DetalheCursoComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/curso/:id',
    name: 'DetalheCurso',
    component: DetalheCursoComponent
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
