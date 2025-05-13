<template>
  <div class="container-login">
    <div class="form-login-area">
      <div class="form-area-img">
        <img src="../../assets/images/logo.png" alt="Logo Librear" />
      </div>
      <form @submit.prevent="validateForm" class="form-login">
        <h2>Crie sua conta</h2>

        <div class="input-container">
          <input type="text" id="name" v-model="form.name" name="name" required />
          <label for="name">Nome</label>
        </div>

        <div class="input-container">
          <input type="email" id="email" v-model="form.email" name="email" required />
          <label for="email">E-mail</label>
        </div>

        <div class="input-container">
          <input type="password" id="password" v-model="form.password" name="password" required />
          <label for="password">Senha</label>
        </div>

        <button type="submit">Cadastrar</button>
        <router-link to="/login" class="link-btn">Já tem uma conta? Entrar</router-link>
      </form>
    </div>

    <!-- Modal de Erro -->
    <div
      class="modal fade"
      id="errorModal"
      tabindex="-1"
      aria-labelledby="errorModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="errorModalLabel">Erro no Cadastro</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body">
            <ul>
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '@/services/api';
import { Modal } from 'bootstrap';
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      errors: []
    };
  },
  methods: {
    async validateForm() {
      this.errors = [];

      const { name, email, password } = this.form;

      // Validação de campos vazios
      if (!name || !email || !password) {
        this.errors.push('Por favor, preencha todos os campos.');
      }

      // Validação de emaiils válidos, posso mudar dps, foi só para teste
      const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|yahoo)\.com$/;
      if (!emailRegex.test(email)) {
        this.errors.push('Insira um e-mail válido (gmail, hotmail, outlook ou yahoo com .com).');
      }

      // Validação qualquer de senha, posso fazer uma regex dps.
      if (password.length < 3) {
        this.errors.push('A senha deve conter pelo menos 5 caracteres.');
      }

      if (this.errors.length > 0) {
        const modal = new Modal(document.getElementById('errorModal'));
        modal.show();
        return;
      }

      try
      {
          await api.post("/user", {
          email: this.form.email,
          name: this.form.name,
          password: this.form.password,
       })
       this.$router.push('/login');

      }
      catch(error)
      {
        if (error.response?.data?.errors) {
        const allErrors = error.response.data.errors;
        for (const key in allErrors) {
          if (Object.hasOwn(allErrors, key)) {
            this.errors.push(...allErrors[key]);
          }
        }
      } else if (error.response?.data?.msg) {
        this.errors.push(error.response.data.msg); 
      } else {
        this.errors.push('Erro inesperado ao cadastrar. Tente novamente.');
      }

      const modal = new Modal(document.getElementById('errorModal'));
      modal.show();
      }

    }
  }
};
</script>
  
  <style scoped>
  .link-btn:hover{
    color: #00000091;
  }
  .container-login {
    width: 100%;
    min-height: calc(100vh - 110px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
  }
  
  .form-login-area {
    width: 630px;
    background-color: var(--color-secondary);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 0;
  }
  
  .form-area-img {
    background-color: #fff;
    width: 240px;
    height: 228px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .form-area-img img {
    height: 194px;
    width: 240px;
  }
  
  .form-login {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 1em 0;
  }
  
  .form-login h2 {
    font-size: 42px;
    max-width: 320px;
    text-align: center;
  }
  
  .input-container {
    position: relative;
    width: 300px;
  }
  
  .input-container input {
    width: 100%;
    padding: 12px 10px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    outline: none;
  }
  
  .input-container label {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    color: gray;
    font-size: 16px;
    transition: 0.3s ease-in-out;
    pointer-events: none;
    background: transparent;
  }
  
  .input-container input:focus + label,
  .input-container input:not(:placeholder-shown) + label {
    top: 10px;
    left: 10px;
    font-size: 12px;
    color: #555555;
    padding: 0 5px;
  }
  
  .form-login button {
    width: 300px;
    border: none;
    padding: 10px 88px;
    border-radius: 6px;
    background-color: var(--color-action);
    color: var(--color-primary);
  }
  
  .form-login a {
    color: #000;
    text-decoration: none;
  }
  
  @media (max-width: 700px) {
    .container-login
    {
      padding: 0px;
    }
    .form-login-area {
      border-radius: 0px;
      width: 100%;
      padding: 1.5em 0;
    }
  
    .form-area-img {
      width: 200px;
      height: 180px;
    }
  
    .form-area-img img {
      height: 90%;
      width: 100%;
    }
  
    .form-login {
      width: 100%;
      gap: 10px;
    }
  
    .form-login h2 {
      font-size: 24px;
    }
  
    .input-container {
      width: 260px;
    }
  
    .input-container input {
      padding: 8px 6px;
      font-size: 14px;
    }
  
    .form-login button {
      width: 260px;
      padding: 8px 0;
    }
  }
  </style>
  