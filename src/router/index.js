import { createRouter, createWebHistory } from 'vue-router';
import homepage from '../components/pages/homepage.vue';
import Login from '../components/pages/LoginComponent.vue';
import PreRecuperarSenha from '@/components/PreRecuperarSenha.vue';
import FormRecuperarSenha from '@/components/FormRecuperarSenha.vue';
import DetalheCursoComponent from '@/components/pages/DetalheCursoComponent.vue';
import AppNavbar from "@/components/organisms/AppNavbar.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: homepage,
      header: AppNavbar,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/curso/:id",
    name: "DetalheCurso",
    components: {
      default: DetalheCursoComponent,
      header: AppNavbar,
    },
  },
  {
    path: "/pre-recuperar-senha",
    name: "PreRecoverPassword",
    components: {
      default: PreRecuperarSenha,
      header: AppNavbar,
    },
  },
  {
    path: "/recuperar-senha",
    name: "FormRecuperarSenha",
    components: {
      default: FormRecuperarSenha,
      header: AppNavbar,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
