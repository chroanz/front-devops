<template>
    <div class="full-background d-flex justify-content-center py-5">
      <div class=" p-5 rounded shadow-sm form-wrapper">
        <h2 class="text-center text-dark mb-4">Perfil de Ana Beatriz Silveira</h2>
  
        <div class="text-center mb-4">
          <img
            :src="require('@/assets/images/perfil.svg')"
            alt="Imagem de perfil"
            class="rounded-circle"
            width="150"
            height="150"
          />
           <a class="editimage" href="alterar imagem"><p class="mt-2">Alterar Imagem</p></a>
        </div>
  
        <form @submit.prevent="submitForm" class="mt-3">
          <!-- Primeira linha: Nome e Sobrenome -->
          <div class="row mb-3">
            <div class="col-md-6 mb-3 mb-md-0">
              <label for="firstName" class="form-label">Primeiro Nome</label>
              <input type="text" id="firstName" class="form-control form-control-custom" v-model="firstName" />
            </div>
            <div class="col-md-6">
              <label for="lastName" class="form-label">Último Nome</label>
              <input type="text" id="lastName" class="form-control form-control-custom" v-model="lastName" />
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
                :class="{'is-invalid': passwordMismatch}"
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
  export default {
    data() {
      return {
        firstName: 'Ana Beatriz',
        lastName: 'Silveira',
        password: '',
        confirmPassword: '',
        showPassword: false
      };
    },
    computed: {
      passwordMismatch() {
        return this.password && this.confirmPassword && this.password !== this.confirmPassword;
      }
    },
    methods: {
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
  };
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
  