<template>
  <div class="bg-light">
    <!-- Header do perfil com nome do usuário e botão editar -->
    <div class="bg-purple py-3 px-5 d-flex justify-content-between align-items-center">
      <h2 class="m-0 text-black">Perfil de {{ usuario.nome }}</h2>
      <button class="btn btn-light btn-sm">Editar Perfil</button>
    </div>

    <!-- Foto e informações do perfil -->
    <div class="py-3">
      <div class="container text-center">
        <!-- Foto do perfil -->
        <div class="position-relative d-inline-block mb-2">
          <div class="rounded-circle overflow-hidden" style="width: 120px; height: 120px; border: 3px solid #b070b0;">
            <img 
              :src="usuario.foto || require('@/assets/images/logo.png')" 
              alt="Foto de perfil" 
              class="img-fluid w-100 h-100"
              style="object-fit: cover;"
            >
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
            <div class="py-2 rounded" style="background-color: #b070b0;">
              <h3 class="mb-1 text-black">{{ usuario.cursosConcluidos.length }}</h3>
              <p class="m-0 text-black">Cursos Concluídos</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-4 text-center mb-2 mb-md-0">
            <div class="py-2 rounded" style="background-color: #b070b0;">
              <h3 class="mb-1 text-black">{{ usuario.videosAssistidos }}</h3>
              <p class="m-0 text-black">Vídeos Assistidos</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-4 text-center">
            <div class="py-2 rounded" style="background-color: #b070b0;">
              <h3 class="mb-1 text-black">{{ usuario.exerciciosRealizados }}</h3>
              <p class="m-0 text-black">Exercícios Realizados</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cursos em andamento -->
    <div class="container my-3">
      <h3 class="mb-3 text-black">Cursos em andamento</h3>
      
      <div class="row">
        <div v-for="(curso, index) in usuario.cursosEmAndamento" :key="'andamento-'+index" class="col-md-4 mb-3">
          <div class="card custom-card">
            <div class="card-img-top" style="height: 180px; overflow: hidden; border-top-left-radius: 15px; border-top-right-radius: 15px;">
              <img
                :src="curso.imagem"
                :alt="curso.titulo"
                class="w-100 h-100"
                style="object-fit: cover; border-top-left-radius: 15px; border-top-right-radius: 15px;"
              >
            </div>
            <div class="card-body">
              <h5 class="card-title text-black">{{ curso.titulo }}</h5>
              <div class="star-rating mb-2">
                <span v-for="i in 5" :key="i" class="star" :class="{ 'filled': i <= curso.avaliacao }">★</span>
              </div>
              <div class="progress mb-2" style="height: 8px;">
                <div 
                  class="progress-bar" 
                  role="progressbar" 
                  :style="{ width: curso.progresso + '%', backgroundColor: '#b070b0' }" 
                  :aria-valuenow="curso.progresso" 
                  aria-valuemin="0" 
                  aria-valuemax="100">
                </div>
              </div>
              <p class="text-end mb-0"><small>{{ curso.progresso }}% concluído</small></p>
              <a href="#" class="btn btn-custom mt-2">Continuar</a>
            </div>
          </div>
        </div>
        
        <!-- Mensagem quando não há cursos em andamento -->
        <div v-if="usuario.cursosEmAndamento.length === 0" class="col-12 text-center py-3">
          <p>Você ainda não iniciou nenhum curso. <a href="#" class="text-decoration-none" style="color: #b070b0;">Ver cursos disponíveis</a></p>
        </div>
      </div>
    </div>

    <!-- Últimos cursos concluídos -->
    <div class="container my-3">
      <h3 class="mb-3 text-black">Últimos cursos concluídos</h3>
      
      <div class="row">
        <div v-for="(curso, index) in usuario.cursosConcluidos" :key="'concluido-'+index" class="col-md-4 mb-3">
          <div class="card custom-card">
            <div class="card-img-top" style="height: 180px; overflow: hidden; border-top-left-radius: 15px; border-top-right-radius: 15px;">
              <img
                :src="curso.imagem"
                :alt="curso.titulo"
                class="w-100 h-100"
                style="object-fit: cover; border-top-left-radius: 15px; border-top-right-radius: 15px;"
              >
            </div>
            <div class="card-body">
              <h5 class="card-title text-black">{{ curso.titulo }}</h5>
              <div class="star-rating mb-2">
                <span v-for="i in 5" :key="i" class="star" :class="{ 'filled': i <= curso.avaliacao }">★</span>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <span class="badge rounded-pill" style="background-color: #b070b0;">Concluído</span>
                <small class="text-muted">{{ formatarData(curso.dataConclusao) }}</small>
              </div>
              <a href="#" class="btn btn-custom mt-2">Ver Certificado</a>
            </div>
          </div>
        </div>
        
        <!-- Mensagem quando não há cursos concluídos -->
        <div v-if="usuario.cursosConcluidos.length === 0" class="col-12 text-center py-3">
          <p>Você ainda não concluiu nenhum curso.</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-purple py-4">
      <div class="container">
        <div class="row">
          <!-- Coluna da Logo e Redes Sociais -->
          <div class="col-md-3 text-center mb-3 mb-md-0">
            <img 
              :src="require('@/assets/images/logo.png')" 
              alt="Logo" 
              class="img-fluid mb-2" 
              style="max-width: 150px;"
            >
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
              <li><a href="/SobreNos" class="text-black text-decoration-none">Missão e visão</a></li>
              <li><a href="/OPerfil" class="text-black text-decoration-none">Outros clientes</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PerfilUsuario',
  data() {
    return {
      usuario: {
        nome: 'Ana Beatriz Silveira',
        foto: null,
        videosAssistidos: 80,
        exerciciosRealizados: 75,
        cursosEmAndamento: [
          {
            id: 1,
            titulo: 'Aprendendo Libras',
            imagem: require('@/assets/images/Libras.png'),
            avaliacao: 5,
            progresso: 45
          },
          {
            id: 2,
            titulo: 'Ensino de Libras',
            imagem: require('@/assets/images/Libras.png'),
            avaliacao: 4,
            progresso: 30
          }
        ],
        cursosConcluidos: [
          {
            id: 3,
            titulo: 'Recebendo alunos com surdez',
            imagem: require('@/assets/images/defau.png'),
            avaliacao: 5,
            dataConclusao: new Date(2025, 2, 15)
          },
          {
            id: 4,
            titulo: 'Recebendo alunos com deficiência auditiva',
            imagem: require('@/assets/images/defau.png'),
            avaliacao: 5,
            dataConclusao: new Date(2025, 1, 10)
          },
          {
            id: 5,
            titulo: 'Escrita em Braille',
            imagem: require('@/assets/images/Cegueira.png'),
            avaliacao: 4,
            dataConclusao: new Date(2025, 0, 20)
          }
        ]
      }
    }
  },
  methods: {
    formatarData(data) {
      // Formatar data no formato DD/MM/YYYY
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

body, html {
  background-color: #f8f9fa;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.bg-purple {
  background-color: #B288C0;
}

.custom-card {
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  height: 100%;
  background-color: #ffffff;
}

.custom-card:hover {
  transform: scale(1.03);
}

.star-rating {
  color: #b070b0;
  font-size: 1.2rem;
}

.star {
  color: #e0e0e0;
}

.star.filled {
  color: #B288C0;
}

.btn-custom {
  background-color: #B288C0;
  color: white;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.btn-custom:hover {
  background-color: #B288C0;
  color: white;
}

.social-icons a {
  color: #333;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #B288C0;
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

 <!-- fun  -->