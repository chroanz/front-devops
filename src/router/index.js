import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HelloWorld.vue';
import Login from '../components/LoginComponent.vue';
import PreRecuperarSenha from '@/components/PreRecuperarSenha.vue';
import FormRecuperarSenha from '@/components/FormRecuperarSenha.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/pre-recuperar-senha',
    name: 'PreRecoverPassword',
    component: PreRecuperarSenha
  },
  {
    path: '/recuperar-senha',
    name: 'FormRecuperarSenha',
    component: FormRecuperarSenha
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
