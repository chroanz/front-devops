<template>
  <div>

    <!-- Carousel centralizado com altura maior e preparado para imagens -->
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-12">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner rounded shadow">
              <div class="carousel-item active">
                <img :src="require('@/assets/images/imagem2.png')" class="d-block w-100 carousel-image" alt="Slide 1">


              </div>
              <div class="carousel-item">
                <img :src="require('@/assets/images/imagem3.png')" class="d-block w-100 carousel-image" alt="Slide 2">


              </div>
              <div class="carousel-item">
                <img :src="require('@/assets/images/imagem1.png')" class="d-block w-100 carousel-image" alt="Slide 3">


              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Próximo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
   
    <!-- Cards de cursos -->
    <div class="container mt-5">
  <h2 class="mb-4 text-black">Uma Grande Variedade de Cursos</h2>
  <p class="mb-3 mb-md-4 mb-lg-5 text-black" style="text-align: justify;">Na nossa plataforma você terá acesso a diversos cursos relacionados ao aprendizado e ensino relacionados à acessibilidade de alunos com deficiência visual, deficiência auditiva ou surdocegueira. Você terá oportunidade de compreender como esses alunos percebem o mundo à sua volta, bem como diversas ferramentas que possam permitir seu acolhimento e comunicação.</p>
  <div class="row">
      <div class="col-md-4 mb-4">
          <div class="card custom-card">
              <div class="card-img-top" style="height: 250px; overflow: hidden; border-top-left-radius: 15px; border-top-right-radius: 15px;">
                  <img
                      :src="require('@/assets/images/Libras.png')"
                      alt="Descrição da imagem"
                      class="w-100 h-100"
                      style="object-fit: cover; border-top-left-radius: 15px; border-top-right-radius: 15px;"
                  >
              </div>
              <div class="card-body">
                  <h5 class="card-title text-black">Ensino de Libras</h5>
                  <div class="star-rating mb-3">
                      <span class="star filled">★</span>
                      <span class="star filled">★</span>
                      <span class="star filled">★</span>
                      <span class="star filled">★</span>
                      <span class="star filled">★</span>
                  </div>
                  <p class="card-text text-muted mb-3">Aprenda a comunicação em Língua Brasileira de Sinais (Libras).</p>
                  <a href="/curso/3" class="btn btn-custom">Ver Detalhes</a>
              </div>
          </div>
      </div>
      <div class="col-md-4 mb-4">
          <div class="card custom-card">
              <div class="card-img-top" style="height: 250px; overflow: hidden; border-top-left-radius: 15px; border-top-right-radius: 15px;">
                  <img
                      :src="require('@/assets/images/Cegueira.png')"
                      alt="Descrição da imagem"
                      class="w-100 h-100"
                      style="object-fit: cover; border-top-left-radius: 15px; border-top-right-radius: 15px;"
                  >
              </div>
              <div class="card-body">
                  <h5 class="card-title text-black">Recebendo Alunos com Cegueira</h5>
                  <div class="star-rating mb-3">
                      <span class="star filled">★</span>
                      <span class="star filled">★</span>
                      <span class="star filled">★</span>
                      <span class="star filled">★</span>
                      <span class="star">★</span>
                  </div>
                  <p class="card-text text-muted mb-3">Estratégias para acolher e ensinar alunos com deficiência visual.</p>
                  <a href="#" class="btn btn-custom">Ver Detalhes</a>
              </div>
          </div>
      </div>
      <div class="col-md-4 mb-4">
          <div class="card custom-card">
              <div class="card-img-top" style="height: 250px; overflow: hidden; border-top-left-radius: 15px; border-top-right-radius: 15px;">
                  <img
                      :src="require('@/assets/images/tátil.png')"
                      alt="Descrição da imagem"
                      class="w-100 h-100"
                      style="object-fit: cover; border-top-left-radius: 15px; border-top-right-radius: 15px;"
                  >
              </div>
              <div class="card-body">
                  <h5 class="card-title text-black">Libras Táctil</h5>
                  <div class="star-rating mb-3">
                      <span class="star filled">★</span>
                      <span class="star filled">★</span>
                      <span class="star filled">★</span>
                      <span class="star filled">★</span>
                      <span class="star">★</span>
                  </div>
                  <p class="card-text text-muted mb-3">Técnicas de comunicação em Libras para pessoas com surdocegueira.</p>
                  <a href="#" class="btn btn-custom">Ver Detalhes</a>
              </div>
          </div>
      </div>
  </div>
</div>

    <div class="container mt-4 mb-5">
      <h2 class="mb-5 text-black">Principais categorias</h2>

      <div class="row">
          
          <div class="col-md-4 mb-4">
          <div class="card custom-card">
              <div class="card-img-top" style="height: 250px; overflow: hidden; border-top-left-radius: 15px; border-top-right-radius: 15px;">
                  <img
                      :src="require('@/assets/images/defvisual.png')"
                      alt="Descrição da imagem"
                      class="w-100 h-100"
                      style="object-fit: cover; border-top-left-radius: 15px; border-top-right-radius: 15px;"
                  >
              </div>
              <div class="card-body">
                  <h5 class="card-title text-black">Deficiência visual</h5>
                  <a href="#" class="btn btn-custom">Ver Detalhes</a>
              </div>
          </div>
      </div>
      <div class="col-md-4 mb-4">
          <div class="card custom-card">
              <div class="card-img-top" style="height: 250px; overflow: hidden; border-top-left-radius: 15px; border-top-right-radius: 15px;">
                  <img
                      :src="require('@/assets/images/defau.png')"
                      alt="Descrição da imagem"
                      class="w-100 h-100"
                      style="object-fit: cover; border-top-left-radius: 15px; border-top-right-radius: 15px;"
                  >
              </div>
              <div class="card-body">
                  <h5 class="card-title text-black">Deficiência auditiva</h5>
                  <a href="#" class="btn btn-custom">Ver Detalhes</a>
              </div>
          </div>
      </div>
      <div class="col-md-4 mb-4">
          <div class="card custom-card">
              <div class="card-img-top" style="height: 250px; overflow: hidden; border-top-left-radius: 15px; border-top-right-radius: 15px;">
                  <img
                      :src="require('@/assets/images/tátil.png')"
                      alt="Descrição da imagem"
                      class="w-100 h-100"
                      style="object-fit: cover; border-top-left-radius: 15px; border-top-right-radius: 15px;"
                  >
              </div>
              <div class="card-body">
                  <h5 class="card-title text-black">Surdocegueira</h5>
                  <a href="#" class="btn btn-custom">Ver Detalhes</a>
              </div>
          </div>

        </div>

    </div>

  </div>
</div>


  <footer class="bg-purple py-5">
<div class="container">
  <div class="row">
    <!-- Coluna da Logo e Redes Sociais -->
    <div class="col-md-3 text-center mb-4 mb-md-0">
      <img 
        :src="require('@/assets/images/logo.png')" 
        alt="Logo" 
        class="img-fluid mb-3" 
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
    <div class="col-md-3 mb-4 mb-md-0">
      <h6 class="text-black mb-3">Negócios</h6>
      <ul class="list-unstyled">
        <li><a href="#" class="text-black text-decoration-none">Nossos planos</a></li>
      </ul>
    </div>

    <div class="col-md-3 mb-4 mb-md-0">
      <h6 class="text-black mb-3">O que temos</h6>
      <ul class="list-unstyled">
        <li><a href="#" class="text-black text-decoration-none">Categorias</a></li>
        <li><a href="#" class="text-black text-decoration-none">Cursos</a></li>
        <li><a href="#" class="text-black text-decoration-none">Outros recursos</a></li>
      </ul>
    </div>

    <div class="col-md-3">
      <h6 class="text-black mb-3">Quem somos</h6>
      <ul class="list-unstyled">
        <li><a href="/SobreNos" class="text-black text-decoration-none">Missão e visão</a></li>
        <li><a href="/OPerfil" class="text-black text-decoration-none">outros clientes</a></li>
        <li><a href="/OPerfil" class="text-black text-decoration-none">Perfil</a></li>
      </ul>
    </div>
  </div>


</div>
</footer>


</template>


<script>
export default {
  name: 'HomePage',
  data() {
    return {
      // Dados da página
    }
  }
}
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  color: black;
}


.btn {
  color: rgb(255, 255, 255);
}


.logo-img {
  max-width: 10vh; 
  height: auto;
}


.carousel-item {
  height: 500px; /* Altura aumentada do slide */
}


.carousel-image {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

@media (max-width: 768px) {
.carousel-image {
  aspect-ratio: 4 / 3;
  max-height: 300px;
}
}

.slide-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #9c9c9c;
  color: #333;
  font-size: 24px;
  font-weight: bold;
}

.custom-card {
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.custom-card:hover {
  transform: scale(1.05);
}

.card-img-top {
  object-fit: cover;
}

.star-rating {
  color: #b070b0;
  font-size: 1.2rem;
}

.star {
  color: #e0e0e0;
}

.star.filled {
  color: #b070b0;
}

.btn-custom {
  background-color: #b070b0;
  color: white;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.btn-custom:hover {
  background-color: #9c5f9c;
}

.card-body {
  padding: 1.25rem;
}

/*footer*/

.bg-purple {
background-color: #b070b0;
}

.list-unstyled a:hover{
  color:rgb(255, 255, 255) !important;
  opacity: 0.7;
}

.social-icons a {
font-size: 1.5rem;
transition: color 0.3s ease;
}

.social-icons a:hover {
color: #000000 !important;
opacity: 0.7;
}

.btn:hover {
  background-color: #925aa3 !important;
}

.text-black {
  color: black !important;
}
</style>