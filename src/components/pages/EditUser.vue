<template>
  <div class="full-background d-flex justify-content-center py-5">
    <div class="p-5 rounded shadow-sm form-wrapper">
      <h2 class="text-center text-dark mb-4">
        Perfil de {{ usuario.nome }}
      </h2>

      <div class="text-center mb-4">
        <img
          :src="usuario.foto || require('@/assets/images/perfil.svg')"
          alt="Imagem de perfil"
          class="rounded-circle"
          width="150"
          height="150"
        />
        <a class="editimage" href="#">
          <p class="mt-2">Alterar Imagem</p>
        </a>
      </div>

      <form @submit.prevent="submitForm" class="mt-3">
        <!-- Primeira linha: Nome e Sobrenome -->
        <div class="row mb-3">
          <div class="col-md-14 mb-3 mb-md-0">
            <label for="nome" class="form-label">Nome Completo </label>
            <input
              type="text"
              id="nome"
              class="form-control form-control-custom" 
              v-model="usuario.nome"
            />
          </div>
        </div>


          <div class="row mb-3">
          <div class="col-md-14 mb-3 mb-md-0">
            <label for="email" class="form-label">Email</label>
            <input
              type="text"
              id="email"
              class="form-control form-control-custom"
              v-model="usuario.email"
            />
          </div>
        </div>

        <!-- Segunda linha: Nova Senha e Repetir Senha -->
        <div class="row mb-3">
          <div class="col-md-6 mb-3 mb-md-0">
            <label for="newPassword" class="form-label">Nova Senha</label>
            <input
              :type="showPassword ? 'text' : 'password'"
              id="newPassword"
              class="form-control form-control-custom"
              v-model="password"
            />
          </div>
          <div class="col-md-6">
            <label for="confirmPassword" class="form-label">Repita a Senha</label>
            <input
              :type="showPassword ? 'text' : 'password'"
              id="confirmPassword"
              class="form-control form-control-custom"
              v-model="confirmPassword"
              :class="{ 'is-invalid': passwordMismatch }"
            />
            <div class="invalid-feedback">
              As senhas digitadas não são idênticas
            </div>
          </div>
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-primary">Salvar Alterações</button>
        </div>
      </form>
    </div>
  </div>
</template>

  <script>

  // import { api } from '@/services/api';
  export default {
    data() {
      return{
        usuario: {
          nome: this.buscarPerfil().name,
          foto: null,
          email: this.buscarPerfil().email
        }
      }
    },
    mounted() {
      this.buscarPerfil();
    },
    methods: {
      buscarPerfil() {
        return JSON.parse(sessionStorage.getItem("user"));
    },

      formatarData(data) {
      return new Date(data).toLocaleDateString('pt-BR');
      }
    },

    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    submitForm() {
      if (this.passwordMismatch) {
        alert('As senhas não conferem.');
        return;
      }
      alert('Alterações salvas com sucesso!');
    }

  } 

  </script>
  
  <style scoped>
  /* Corrige o fundo quebrado */
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #387cc0;
  }
  
  .full-background {
    min-height: 100vh;
    width: 100%;
    background-color: #f8f9fa;
  }

  .editimage{
    text-decoration: none;
    color: #387cc0;
  }

  .editimage:hover{
    color: #096dd1;
  }
  
  /* Container do formulário */
  .form-wrapper {
    width: 100%;
    max-width: 900px;
    background-color: #ececec;
    margin-left: 16px;
    margin-right: 16px;
  }
  
  /* Estilo dos inputs */
  .form-control-custom {
    height: 45px;
    font-size: 16px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    margin-top: 10px;
  }
  
  .form-control-custom:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  
  /* Botão */
  button.btn.btn-primary {
    margin-top: 60px;
    width: 190px;
    height: 45px;
  }
  
  /* Responsividade */


  @media (min-width: 905px){
    .form-wrapper {
        margin-left: 19px;
        margin-right: 19px;
    }
  }



  @media (max-width: 768px) {
    .form-wrapper {
        margin-left: 19px;
        margin-right: 19px;
    }
  
    .row .col-md-6 {
      width: 100%;
    }
  
    .btn-primary {
      width: 100%;
    }
  }
  
  @media (max-width: 480px) {

    .form-wrapper {
        margin-left: 19px;
        margin-right: 19px;
    }
    img {
      width: 120px;
      height: 120px;
    }
  
    button.btn.btn-primary {
      margin-top: 40px;
      width: 100%;
    }
  }
  </style>
  