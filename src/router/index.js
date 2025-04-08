import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/pages/homepage.vue";
import Login from "../components/pages/LoginComponent.vue";
import Cadastro from "../components/pages/CadastroComponent.vue";
import PreRecuperarSenha from "@/components/PreRecuperarSenha.vue";
import FormRecuperarSenha from "@/components/FormRecuperarSenha.vue";
import DetalheCursoComponent from "@/components/pages/Cursos/DetalheCursoComponent.vue";
import AppNavbar from "@/components/organisms/AppNavbar.vue";
import CreateLessons from "@/components/pages/Cursos/CreateLessons.vue";
import CreateHomeWork from "@/components/pages/Cursos/CreateHomeWork.vue";
import CreateCourse from "@/components/pages/Cursos/CreateCourse.vue";
import SignupADM from "@/components/ModalSignupADM.vue";
import CoursesPage from "@/components/pages/Cursos/CoursesPage.vue";
import AcompanhamentoComponent from "@/components/pages/Cursos/AcompanhamentoComponent.vue";
import AulaView from '@/components/organisms/AulaView.vue';
import LeituraView from '@/components/organisms/LeituraView.vue';
import CardBusca from "@/components/organisms/CardBusca.vue";
import SobreNos from "@/components/pages/SobreNos.vue";
import CardShowClass from "@/components/CardShowClass.vue";

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
    components: {
      default: Login,
      header: AppNavbar,
    },
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    components: {
      default: Cadastro,
      header: AppNavbar,
    },
  },
  {
    path: "/cursos",
    name: "ListaCursos",
    component: CoursesPage
  },
  {
    path: "/curso/:id/acompanhar",
    name: "AcompanharCurso",
    component: AcompanhamentoComponent,
    children: [
      {
        path: "aula/:atividadeId",
        name: "AssistirAula",
        component: AulaView
      },
      {
        path: "leitura/:atividadeId",
        name: "RealizarLeitura",
        component: LeituraView
      }
    ]
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
  },
  {
    path: "/courses",
    name: "CoursesPage",
    components: {
      default: CoursesPage,
      header: AppNavbar,
    },
  },
  {
    path: "/cardbusca",
    name: "CardBusca",
    components: {
      default: CardBusca,
      header: AppNavbar,
    },
  },
  {
    path: "/SobreNos",
    name: "SobreNos",
    components: {
      default: SobreNos,
      header: AppNavbar,
    },
  },
  {
    path: "/cardshowclass",
    name: "CardShowClass",
    components: {
      default: CardShowClass,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
