

<template>
 

   <nav class="navbar navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img :src="require('@/assets/logosur.png')" alt="Logo">
      </a>

      <!-- OFFCANVAS -->
      <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <img :src="require('@/assets/menu.png')" alt="Menu">
        Categorias
      </a>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <a class="navbar-brand" href="#">
            <img :src="require('@/assets/logosur.png')" alt="Logo">
          </a>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="titulo-offcanvas">Veja nossas categorias de aulas</div>

          <ul>
            <li class="nav-item"><a class="nav-link" href="/courses">Todos os cursos</a></li>
            <hr>
            <li class="nav-item"><a class="nav-link" href="#">Deficiência Visual</a></li>
            <hr>
            <li class="nav-item"><a class="nav-link" href="#">Deficiência Auditiva</a></li>
            <hr>
            <li class="nav-item"><a class="nav-link" href="#">Surdocegueira</a></li>
            <hr>
          </ul>
        </div>
      </div>

      <!-- CAMPO DE BUSCA -->

      <div ref="barraDeBusca" class="div-barra-de-busca">
        <BarraDeBusca />
      </div>

      <a class="navbar-brand2" href="#">

          <div class="info-login-icon"></div> <!-- Ícone de informação -->
          <img :src="require('@/assets/login-icon.png')" alt="Login">
      </a>

    </div>
  </nav>
</template>



<script>

import BarraDeBusca from "../BarraDeBusca.vue";

export default {
  name: "AppNavbar",
  components: {
    BarraDeBusca,
  },
  mounted() {
    this.moveBarraDeBusca(); 
    this.addInfoLoginClickListener(); 
    window.addEventListener("resize", this.moveBarraDeBusca);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.moveBarraDeBusca);
  },
  methods: {
  moveBarraDeBusca() {
    const barraDeBusca = this.$refs.barraDeBusca;
    const offcanvasBody = document.querySelector(".offcanvas-body");
    const navbar = document.querySelector(".container-fluid");

    if (!barraDeBusca || !offcanvasBody || !navbar) return;

    if (window.innerWidth <= 1063) { 
      if (!offcanvasBody.contains(barraDeBusca)) {
        offcanvasBody.insertBefore(barraDeBusca, offcanvasBody.firstChild);
      }
    } else {
      navbar.insertBefore(barraDeBusca, navbar.children[2]); 
    }
  },

    addInfoLoginClickListener() {
      const infoLoginIcon = document.querySelector('.info-login-icon');
      if (infoLoginIcon) {
        infoLoginIcon.addEventListener('click', () => { 
          infoLoginIcon.classList.toggle('active');
        });
      }
    },

    addInfoCampClickListener() {
      const infoIcon = document.querySelector('.info-icon');
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


  /* NAV */

  .navbar {
    background-color: rgba(178, 136, 192, 1);
    margin-bottom: 1px;
  }


  .container-fluid {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 50px 0 50px; 
  }



  .navbar-light .navbar-nav .nav-link {
    color: #ffffff;
  }

  .navbar-light .navbar-nav .nav-link:hover {
    color: #f8f9fa;
  }


  .navbar-collapse.show {
    display: block !important;
  }
  .dropdown-menu.show {
    display: block !important;
  }



  /* BOTÃO OFFCANVAS */

  .btn-primary {
    background-color: transparent; 
    border: none;
    font-size: 19px;
  }


  .btn-primary:hover,
  .btn-primary:focus,
  .btn-primary:active {
    background-color: transparent !important; 
    border: none !important; 
  }


  /* OFFCANVAS */

  .offcanvas-body .titulo-offcanvas{
    font-size: 20px;
    margin-bottom: 50px;
  }

  .offcanvas-body ul {
    list-style-type: none; 
    padding-left: 0; 
  }

  .offcanvas-body .nav-link {
    margin-top: 30px;
    font-size: 17px; 
  }


  /* CAMPO DE BUSCA */


.div-barra-de-busca {
         width: clamp(300px, 100%, 680px);
         margin: 0 auto;
         
     }
 
     .lupa-icon {
         width: 1.2rem;
         position: absolute;
         z-index: 1;
         top: 1.1rem;
         left: 1rem;
     }
 
     .barra-de-busca {
         width: 100%;
         border-radius: 5rem;
         font-size: 1rem;
         font-weight: 400;
         line-height: 1.5;
         color: var(--bs-body-color);
         -webkit-appearance: none;
         -moz-appearance: none;
         appearance: none;
         background-color: var(--bs-body-bg);
         background-clip: padding-box;
         border: var(--bs-border-width) solid var(--bs-border-color);
         transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
     }




.info-icon {
    position: absolute;
    top: 50%;
    right: 10px; 
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url('/src/assets/info-icon.png');
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
}


.info-icon:hover::after {
    content: "Para realizar pesquisa, digite o termo a ser buscado e clique na lupa ou aperte 'Enter' no teclado";
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



  /* ICON LOGIN */


  .navbar-brand2 {
    display: flex;
    align-items: center;
    gap: 10px; 
    position: relative;
}


.info-login-icon {
    width: 20px;
    height: 20px;
    background-image: url('@/assets/info-login-icon.png');
    margin-top: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    position: relative;
}


.info-login-icon:hover::after {
    content: "Faça seu login para visualizar seus cursos ou alterar seus dados pessoais";
    position: absolute;
    top: 30px; 
    left: 50%;
    transform: translateX(-50%);
    width: 250px;
    font-size: 14px;
    color: #777;
    background-color: #fff;
    padding: 8px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    white-space: wrap;
    text-align: center;
}


  .dropdown-info{
    display: none;
  }

  @media (min-width: 1492px) { 
  .div-barra-de-busca {
    display: block !important;
    width: clamp(300px, 100%, 750px);
    margin: 0 auto;
  }
}

  @media (max-width: 1201px) and (min-width: 1050px) {
    .container-fluid {
    padding: 0 10px 0 10px !important;
  }
}




@media (max-width: 1024px) {
  .div-barra-de-busca {
    width: 100%;
    margin-bottom: 20px;
  }
}


  @media (max-width: 768px) { 

    .container-fluid {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 2px 0 2px; 
  }


    .btn-primary {
    background-color: transparent; 
    border: none;
    font-size: 24px;
  }

  .offcanvas-body .barra-de-busca {
    width: 100%; 
    font-size: 16px;
    background-position: 10px center; 
    margin-bottom: 40px;
    border-color: black;
  }

    .info-icon {
    position: absolute;
    top: 30%;
    right: 14px; 
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url('/src/assets/info-icon.png');
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
}


    .info-login-icon {
    width: 20px;
    height: 20px;
    background-image: url('@/assets/info-login-icon.png');
    margin-top: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    position: relative;
}

}


@media (max-width: 428px){
  .info-login-icon{
    display: none !important;
  }

  .navbar-brand2{
    display: none !important;
  }
}

  </style>
  