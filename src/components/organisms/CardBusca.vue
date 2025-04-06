<template>
    <div class="card-custom-prinpal">
  
    
      <div class="card-custom mx-auto mb-4">
        <div class="d-flex flex-row">
          <div class="img-container">
            <img
              :src="require('@/assets/images/recebendo_surdos.png')"
              class="img-fluid rounded-start"
              alt="Card imagem"
            />
          </div>
          <div class="content flex-grow-1 d-flex flex-column justify-content-between">
            <div class="p-3">
              <div class="d-flex justify-content-between align-items-start">
                <h5 class="title">Recebendo alunos com surdez</h5>
                <a class="icon-info-card" href="#">
                  <div class="icone-card"></div>
                  <!-- <img :src="require('@/assets/info2-icon.png')"  alt="Info"> -->
                </a>
              </div>
              <p class="description">
                Neste curso, você irá aprender como realizar o acolhimento de alunos com deficiência auditiva,
                como aspectos dos cuidados com os dispositivos auditivos, especialmente em termos de higienização;
                atividades de estimulação de habilidades comunicativas, etc.
              </p>
            </div>
            <div id="span-aulas" class="d-flex justify-content-start gap-3 px-3 pb-3">
              <span class="fw-semibold">5 Aulas</span>
              <span class="fw-semibold">2 Materiais</span>
            </div>
          </div>
        </div>
      </div>
  
  
      <!-- SEGUNDO CARD -->
      <div class="card-custom mx-auto mt-4 mb-4 ">
        <div class="d-flex flex-row">
          <div class="img-container">
            <img
              :src="require('@/assets/images/curso_libras.png')"
              class="img-fluid rounded-start"
              alt="Card imagem"
            />
          </div>
          <div class="content flex-grow-1 d-flex flex-column justify-content-between">
            <div class="p-3">
              <div class="d-flex justify-content-between align-items-start">
                <h5 class="title">Aprendendo Libras</h5>
                <a class="icon-info-card" href="#">
                  <div class="icone-card"></div>
                  <!-- <img :src="require('@/assets/info2-icon.png')"  alt="Info"> -->
                </a>
              </div>
              <p class="description">
                Aprenda a utilizar a Língua Brasileira de Sinais (Libras) e garanta o atendimento e o tratamento adequado às pessoas com deficiência auditiva
              </p>
            </div>
            <div id="span-aulas" class="d-flex justify-content-start gap-3 px-3 pb-3">
              <span class="fw-semibold">5 Aulas</span>
              <span class="fw-semibold">2 Materiais</span>
            </div>
          </div>
        </div>
      </div>
  
  
      <!-- TERCEIRO CARD -->
      <div class="card-custom mx-auto mt-4">
        <div class="d-flex flex-row">
          <div class="img-container">
            <img
              :src="require('@/assets/images/ensino_libras.png')"
              class="img-fluid rounded-start"
              alt="Card imagem"
            />
          </div>
          <div class="content flex-grow-1 d-flex flex-column justify-content-between">
            <div class="p-3">
              <div class="d-flex justify-content-between align-items-start">
                <h5 class="title">Ensino de Libras</h5>
                <a class="icon-info-card" href="#">
                  <div class="icone-card"></div>
                  <!-- <img :src="require('@/assets/info2-icon.png')"  alt="Info"> -->
                </a>
              </div>
              <p class="description">
                Aprenda como trabalhar com alunos com experiência de vidas diversas, a ensinar sinais e gramática, como avaliar os alunos, o porquê dar enfoque à literatura, e mais.
              </p>
            </div>
            <div id="span-aulas" class="d-flex justify-content-start gap-3 px-3 pb-3">
              <span class="fw-semibold">5 Aulas</span>
              <span class="fw-semibold">2 Materiais</span>
            </div>
          </div>
        </div>
      </div>
  
    </div>
    </template>
  
  
    <script>
    export default {
      name: "CardBusca",
  
      mounted() {
        this.addInfoClickListener(); 
      },
  
      methods: {
        addInfoClickListener() {
          const infoIcon = document.querySelector('.icone-card');
          if (infoIcon) {
            infoIcon.addEventListener('click', () => { 
              infoIcon.classList.toggle('active');
            });
          }
        }
      }
    };
  
    </script>
    
    <style scoped>

    /* CONTAINER PRINCIPAL */

    .card-custom-prinpal {
        background-color: #ffffff;
        min-height: 100vh;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

  
    /*CARD CONTAINER*/
  
    .card-custom {
      background-color: #B288C0;
      border-radius: 20px;
      max-width: 900px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    
    .img-container {
      flex-shrink: 0;
      width: 250px;
      height: 100%;
    }
    
    .img-container img {
      object-fit: cover;
      width: 100%;
      height: 220px;
    }
  
  
    /*ÍCONE INFORMAÇÃO*/
  
    .icone-card {
      top: 80%;
      right: 10px; 
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      background-image: url('/src/assets/icons/info2-icon.png');
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
  }
  
  
  .icone-card:hover::after {
      content: "Clique no quadro do curso para verificar mais detalhes sobre ele e matricular-se para iniciar as aulas";
      position: absolute;
      top: 30px; 
      left: -220px; 
      width: 250px;
      font-size: 14px;
      color: #777;
      background-color: #fff;
      padding: 5px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      white-space: wrap;
  }
  
    .title {
      font-weight: 600;
      font-size: 1.70rem;
      margin-bottom: 0.5rem;
      color: #ffffff;
    }
    
    .description {
      color: #f5f5f5;
      font-size: 0.95rem;
      text-align: left;
      margin: 0;
    }
  
  
    .gap-3 {
      
    gap: 1rem !important;
  }
  
  
  .fw-semibold{
    color: #EFEFEF;
  }
  
  
  /* RESPONSIVO ENTRE 900PX E 600PX */
  @media (max-width: 900px) and (min-width: 301px) {
    .card-custom-prinpal {
      padding-left: 18px;
      padding-right: 18px;
    }
  }
  
  
  
  
  /* RESPONSIVO TABLET */
  
  @media (max-width: 768px) {
    .card-custom {
      flex-direction: column;
    }
  
    .d-flex.flex-row {
      flex-direction: column !important;
    }
  
    .img-container {
      width: 100%;
      height: auto;
    }
  
    .img-container img {
      border-radius: 20px 20px 0 0;
    }
  
    .content {
      padding: 1rem;
    }
  
    .description {
      font-size: 0.95rem;
    }
  }
  
  /* RESPONSIVO MOBILE */
  @media (max-width: 576px) {
    .title {
      font-size: 1.1rem;
    }
  
    .description {
      font-size: 0.9rem;
    }
  
    .d-flex.justify-content-end {
      justify-content: space-between !important;
    }
  
    .icon-info {
      font-size: 1rem;
    }
  }
  
  
  
  
    </style>
    
    