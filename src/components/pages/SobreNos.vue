<template>
    <div class="container my-5">
      <div class="row">
        <div class="col-12 mb-4">
          <h2 class="text-purple  mb-4">Quem Somos</h2>
        </div>
        
        <div class="col-md-7">
          <p class="text-left">
            A <strong>Courses</strong> Nosso objetivo é contribuir para a construção de uma educação mais inclusiva e acessível, oferecendo recursos que atendam às diversas necessidades dos alunos.
             Acreditamos que todos têm o direito de aprender com qualidade, independentemente de suas limitações ou formas de aprendizado.
             Por isso, desenvolvemos conteúdos pensados para ampliar a compreensão tanto de quem tem deficiência visual quanto auditiva, buscando apoiar o trabalho dos professores na criação de ambientes educacionais mais acolhedores, diversos e eficientes.
          </p>
          
          <p class="text-left">
            Fundada em 2013 por um grupo de professores universitários e profissionais de 
            <span class="text-orange">educação especial</span>, fomos pioneiros na capacitação mais de 1.000 educadores em todo o 
            Brasil. Oferecemos profissionais a vida escolar de milhares de estudantes surdos e 
            cegos.
          </p>
        </div>
        
        <div class="col-md-5 d-flex justify-content-center align-items-center">
          <div class="placeholder-image">
            <img
                        :src="require('@/assets/images/curso_libras.png')"
                        alt="Descrição da imagem"
                        class="w-100 h-100"
                        style="object-fit: cover; border-top-left-radius: 15px; border-top-right-radius: 15px;"
                    >
          </div>
        </div>
      </div>
    </div>


    <div class="container my-5">
    <div class="row">
      <div class="col-12 mb-4">
        <h3 class="text-purple">Nossa Missão, Visão e Valores</h3>
      </div>
      
      <div class="row">
        <!-- Missão -->
        <div class="col-md-4 mb-4">
          <div class="card custom-card">
            <div class="vertical-line"></div>
            <div class="card-body">
              <div class="d-flex justify-content-start mb-3">
                <div class="circle-icon">
                  <span>M</span>
                </div>
              </div>
              <h4 class="card-title text-purple">Missão</h4>
              <p class="card-text">
                Capacitar educadores com ferramentas metodológicas e conhecimentos para apoiar a plena inclusão de pessoas com deficiências sensoriais e físicas, transformando escolas em ambientes genuinamente inclusivos.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Visão -->
        <div class="col-md-4 mb-4">
          <div class="card custom-card">
            <div class="vertical-line"></div>
            <div class="card-body">
              <div class="d-flex justify-content-start mb-3">
                <div class="circle-icon">
                  <span>V</span>
                </div>
              </div>
              <h4 class="card-title text-purple">Visão</h4>
              <p class="card-text">
                Ser referência nacional em formação de educadores para inclusão, contribuindo para uma sociedade mais acessível e justa para todos através da educação de qualidade e oportunidades igualitárias.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Valores -->
        <div class="col-md-4 mb-4">
          <div class="card custom-card">
            <div class="vertical-line"></div>
            <div class="card-body">
              <div class="d-flex justify-content-start mb-3">
                <div class="circle-icon">
                  <span>V</span>
                </div>
              </div>
              <h4 class="card-title text-purple">Valores</h4>
              <ul class="list-unstyled">
                <li> Inclusão como direito fundamental</li>
                <li> Excelência acadêmica e pedagógica</li>
                <li> Compromisso com a diversidade e equidade de oportunidades</li>
                <li> Inovação com propósito</li>
                <li> Responsabilidade social</li>
              </ul>
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
        </ul>
      </div>
    </div>


  </div>
</footer>

  </template>
  
  <script>
  export default {
    name: 'QuemSomos',
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  * {
    font-family: 'Poppins', sans-serif;
  }
  
  .text-purple {
    color: #6c1f91;
  }
  
  .text-orange {
    color: #ff6600;
  }
  
  .text-left {
    text-align: left;
  }
  
  .placeholder-image {
    width: 100%;
    height: 250px;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  .text-purple {
  color: #6c1f91;
}

.circle-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #6c1f91;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.custom-card {
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.custom-card:hover {
  transform: translateY(-5px);
}

.vertical-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background-color: #6c1f91;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.card-body {
  padding: 1.5rem;
  padding-left: 2rem;
}

/* Styling for bullet points */
.list-unstyled li {
  position: relative;
  padding-left: 15px;
  margin-bottom: 8px;
}

.list-unstyled li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
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