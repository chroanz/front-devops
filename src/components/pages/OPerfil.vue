<template>
  <div class="bg-light">
    <!-- Header do perfil com nome do usuário e botão editar -->
    <div class="bg-purple py-3 px-5 d-flex justify-content-between align-items-center">
      <h2 class="m-0 text-black">Perfil de {{ usuario.nome }}</h2>
      <button class="btn btn-light btn-sm">
        <a style="text-decoration: none; color: black;" href="/edituser">Editar Perfil</a>
      </button>
    </div>

    <!-- Foto e informações do perfil -->
    <div class="py-3">
      <div class="container text-center">
        <!-- Foto do perfil -->
        <div class="position-relative d-inline-block mb-2">
          <div class="rounded-circle overflow-hidden" style="width: 120px; height: 120px; border: 3px solid #b070b0;">
            <img :src="usuario.foto || require('@/assets/images/logo.png')" alt="Foto de perfil"
              class="img-fluid w-100 h-100" style="object-fit: cover;">
          </div>
        </div>

        <!-- Social media icons -->
        <div class="social-icons mb-3">
          <a href="#" class="mx-2"><i class="bi bi-facebook"></i></a>
          <a href="#" class="mx-2"><i class="bi bi-instagram"></i></a>
          <a href="#" class="mx-2"><i class="bi bi-twitter"></i></a>
          <a href="#" class="mx-2"><i class="bi bi-linkedin"></i></a>
        </div>

        <!-- Estatísticas do usuário -->
        <div class="row justify-content-center">
          <div class="col-md-3 col-sm-4 text-center mb-2 mb-md-0">
            <div class="py-2 rounded info_card">
              <h3 class="mb-1 text-black">{{ usuario.cursosConcluidos?.length }}</h3>
              <p class="m-0 text-black">Cursos Concluídos</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-4 text-center mb-2 mb-md-0">
            <div class="py-2 rounded info_card">
              <h3 class="mb-1 text-black">{{ usuario.videosAssistidos }}</h3>
              <p class="m-0 text-black">Vídeos Assistidos</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-4 text-center">
            <div class="py-2 rounded info_card">
              <h3 class="mb-1 text-black">{{ usuario.leiturasRealizadas }}</h3>
              <p class="m-0 text-black">Leituras Realizadas</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Cursos em andamento -->
    <div class="container my-5">
      <h3 class="mb-4 text-black">📚 Cursos em andamento</h3>

      <div class="row g-2">
        <div v-for="curso in usuario.cursosEmAndamento" :key="curso.id" class="col">
          <div class="custom-card p-3 h-100 d-flex flex-column justify-content-between">
            <div>
              <div class="mb-3">
                <img :src="curso.capa_url || require('@/assets/images/logo.png')" alt="Imagem do curso"
                  class="img-fluid rounded" style="width: 100%; height: 160px; object-fit: cover;" />
              </div>
              <h5 class="text-black mb-2">{{ curso.titulo }}</h5>
              <p class="text-muted medium mb-1"><strong>Categoria:</strong> {{ curso.categoria }}</p>
              <p class="text-muted medium">{{ curso.descricao }}</p>
              <div style="display:flex; gap: 10px; align-items: center;">
                <span>Progresso: </span>
                <ProgressBar :progress="curso.percentual_conclusao"
                  :color="curso.percentual_conclusao < 100 ? '#57CA22' : '#57CA22'" />
                <span>{{ curso.percentual_conclusao }}%</span>
              </div>
              <!-- <p class="text-muted medium">
            <strong>Progresso:</strong> {{ curso.percentual_conclusao }}%
          </p> -->
            </div>
            <div class="mt-2 text-end">
              <router-link :to="`/curso/${curso.id}/acompanhar`" class="btn btn-custom btn-sm">
                Continuar Curso
              </router-link>

            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Últimos cursos concluídos -->
    <div class="container my-3">
      <h3 class="mb-3 text-black"> ✅ Últimos cursos concluídos</h3>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div v-for="curso in usuario.cursosConcluidos" :key="curso.id" class="col">
          <div class="custom-card p-3 h-100 d-flex flex-column justify-content-between"
            style="background-color: #f1eff4;">
            <div>
              <!-- Imagem do curso -->
              <div class="mb-3">
                <img :src="curso.capa_url || require('@/assets/images/logo.png')" alt="Imagem do curso"
                  class="img-fluid rounded" style="width: 100%; height: 160px; object-fit: cover;" />
              </div>

              <!-- Título e informações -->
              <h5 class="text-black mb-2">{{ curso.titulo }}</h5>
              <p class="text-muted medium mb-1"><strong>Categoria:</strong> {{ curso.categoria }}</p>
              <p class="text-muted medium">{{ curso.descricao }}</p>
              <p class="text-success medium">
                <strong>Status:</strong> Concluído ✅
              </p>
            </div>

            <!-- Botão de certificado ou revisão -->
            <div class="mt-2 text-end">
              <a href="#" class="btn btn-success btn-sm">Ver Certificado</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-purple py-4">
      <div class="container">
        <div class="row">
          <!-- Coluna da Logo e Redes Sociais -->
          <div class="col-md-3 text-center mb-3 mb-md-0">
            <img :src="require('@/assets/images/logo.png')" alt="Logo" class="img-fluid mb-2" style="max-width: 150px;">
            <div class="social-icons">
              <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-white me-3"><i class="bi bi-instagram"></i></a>
              <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
              <a href="#" class="text-white"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>

          <!-- Colunas de Links -->
          <div class="col-md-3 mb-3 mb-md-0">
            <h6 class="text-black mb-2">Negócios</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-black text-decoration-none">Nossos planos</a></li>
            </ul>
          </div>

          <div class="col-md-3 mb-3 mb-md-0">
            <h6 class="text-black mb-2">O que temos</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-black text-decoration-none">Categorias</a></li>
              <li><a href="#" class="text-black text-decoration-none">Cursos</a></li>
              <li><a href="#" class="text-black text-decoration-none">Outros recursos</a></li>
            </ul>
          </div>

          <div class="col-md-3">
            <h6 class="text-black mb-2">Quem somos</h6>
            <ul class="list-unstyled">
              <li><a href="/SobreNos" class="text-black text-decoration-none">Sobre nós</a></li>
              <li><a href="/OPerfil" class="text-black text-decoration-none">Outros clientes</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { api } from '@/services/api';
import ProgressBar from '../molecules/ProgressBar.vue';



//const user = JSON.stringify(sessionStorage.getItem("user"))
//console.log(user)
export default {
  components: {
    ProgressBar
  },
  data() {
    return {
      cursos: [],
      usuario: {
        nome: this.buscarPerfil().name,
        foto: null,
        videosAssistidos: [],
        leiturasRealizadas: [],
        cursosEmAndamento: [],  // Dados reais após a busca
        cursosConcluidos: []    // Dados reais após a busca
      }
    }
  },
  mounted() {
    this.buscarPerfil();
    this.buscarCursos();
  },
  methods: {

    // Método para buscar o perfil do usuário logado
    buscarPerfil() {
      return JSON.parse(sessionStorage.getItem("user"));
    },

    // Método para buscar os cursos
    async buscarCursos() {
      try {
        const response = await api.get("/cursos/meus_cursos");
        // Supondo que a API retorna { cursosEmAndamento: [...], cursosConcluidos: [...] }
        console.log(response.data)
        sessionStorage.setItem('meus_cursos', JSON.stringify(response.data))
        this.cursos = response.data;
        this.usuario.cursosConcluidos = this.cursos.filter((curso) => curso.percentual_conclusao == 100)
        this.usuario.cursosEmAndamento = this.cursos.filter((curso) => curso.percentual_conclusao < 100)
        this.usuario.leiturasRealizadas = this.cursos.reduce((accumulator, currValue) => {
          return accumulator + currValue.leituras.filter((leitura) => leitura.visto).length
        }, 0)
        this.usuario.videosAssistidos = this.cursos.reduce((accumulator, currValue) => {
          return accumulator + currValue.aulas.filter((aula) => aula.visto).length
        }, 0)

      } catch (error) {
        console.error('Erro ao buscar cursos:', error);
      }
    },

    formatarData(data) {
      return new Date(data).toLocaleDateString('pt-BR');
    }
  }
} 
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

body,
html {
  background-color: #f8f9fa;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.bg-purple {
  background-color: var(--color-secondary);
}


.rowc {
  background-color: var(--color-secondary);
  height: 900x
}

.custom-card {
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 500px;
  height: 80px;
  background-color: #ffffff;
}

.custom-card:hover {
  transform: scale(1.03);
}

.info_card{
  background-color: var(--color-secondary);
}

.star-rating {
  color: var(--color-secondary);
  font-size: 1.2rem;
}

.star {
  color: #e0e0e0;
}

.star.filled {
  color: var(--color-action);
}

.btn-custom {
  background-color: var(--color-secondary-active);
  color: var(--text-color);
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.btn-custom:hover {
  background-color: var(--color-secondary-hover);
  color: var(--text-color);
}

.social-icons a {
  color: #333;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: var(--color-secondary-hover);
}

footer .social-icons a {
  font-size: 1.5rem;
}

footer .list-unstyled a:hover {
  color: white !important;
  opacity: 0.7;
}

footer .social-icons a:hover {
  color: #000000 !important;
  opacity: 0.7;
}

.text-black {
  color: black !important;
}
</style>