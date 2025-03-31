import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/homepage.vue';
import Login from '../components/pages/LoginComponent.vue';
import PreRecuperarSenha from '@/components/PreRecuperarSenha.vue';
import FormRecuperarSenha from '@/components/FormRecuperarSenha.vue';
import DetalheCursoComponent from '@/components/pages/DetalheCursoComponent.vue';
import AppNavbar from "@/components/organisms/AppNavbar.vue";
import CreateLessons from '@/components/pages/CreateLessons.vue';
import CreateHomeWork from '@/components/pages/CreateHomeWork.vue';
import CreateCourse from '@/components/pages/CreateCourse.vue';
import SignupADM from '@/components/ModalSignupADM.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
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
  {
    path: "/create-course",
    name: "CreateCourse",
    components: {
      default: CreateCourse,
      header: AppNavbar,
    },
  },
  {
    path: "/create-lesson/:id",
    name: "CreateLessons",
    components: {
      default: CreateLessons,
      header: AppNavbar,
    },
  },
  {
    path: "/create-exercise",
    name: "CreateHomeWork",
    components: {
      default: CreateHomeWork,
      header: AppNavbar,
    },
  },
  {
    path: "/signupADM",
    name: "SignupADM",
    components: {
      default: SignupADM,
    },
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
