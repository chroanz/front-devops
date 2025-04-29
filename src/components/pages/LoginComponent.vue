<template>
  <div class="container-login">
    <div class="form-login-area">
      <div class="form-area-img">
        <img src="../../assets/images/logo.png" alt="Logo Librear">
      </div>
      <form action="#" class="form-login" @submit.prevent="handleLogin">
        <h2>Bem-vindo de volta!</h2>

        <div class="input-container">
          <input type="email" id="email" required v-model="email" />
          <label for="email">E-mail</label>
        </div>

        <div class="input-container">
          <input type="password" id="password" required v-model="password" />
          <label for="password">Senha</label>
        </div>

        <button type="submit">Entrar</button>
        <a href="/pre-recuperar-senha" class="link-btn">Esqueci a senha</a>
        <router-link to="/cadastro" class="link-btn">Não possui conta? Cadastre-se</router-link>
      </form>
    </div>

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
            <h5 class="modal-title" id="errorModalLabel">Erro no Login</h5>
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
import api from '@/services/api';
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      email: '',
      password: '',
      errors: []
    };
  },
  methods: {
    async handleLogin() {
      this.errors = []; 

      if (!this.email || !this.password) {
        this.errors.push('Por favor, preencha todos os campos.');
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|yahoo|admin)\.com$/;
      if (this.email && !emailRegex.test(this.email)) {
        this.errors.push('Insira um e-mail válido (gmail, hotmail, outlook ou yahoo com .com).');
      }

      if (this.errors.length > 0) {
        const modal = new Modal(document.getElementById('errorModal'));
        modal.show();
        return;
      }

      try {
        const response = await api.post('/login', {
          email: this.email,
          password: this.password,
        });

        sessionStorage.setItem('access_token', response.data.access_token);
        const userResponse = await api.get("/user/me", {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`
          }
        });
        
        sessionStorage.setItem("user", JSON.stringify(userResponse.data));
        this.$router.push('/');
      } catch (error) {
        console.error('Erro no login:', error);
        this.errors.push('Credenciais inválidas!');
        const modal = new Modal(document.getElementById('errorModal'));
        modal.show();
      }
    },
  },
};
</script>


<style>
.link-btn:hover{
  color: #00000091;
}
.container-login {
  width: 100%;
  height: calc(100vh - 110px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-login-area {
  width: 630px;
  height: 95%;
  background-color: var(--color-secondary);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-area-img {
  margin-top: 4em;
  background-color: #FFF;
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
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.form-login h2 {
  font-size: 42px;
  max-width: 320px;
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

.form-login button
{
  width: 300px;
  border: none;
  padding: 10px 88px;
  border-radius: 6px;
  background-color: var(--color-action);
  color: var(--color-primary);
}

.form-login a
{
  color: #000;
  text-decoration: none;
}

@media (max-height: 1200px)  and (max-width: 700px){

  .form-login-area {
    max-width: 100%;
    border-radius: 0px;
    height: calc(100vh - 72px);
  }

    .form-login h2 {
    font-size: 28px;
    max-width: 320px;
  }

  .input-container {
    position: relative;
    width: 300px;
  }

  .input-container input {
    width: 100%;
    padding: 8px 6px;
    font-size: 12px;
  }

  .form-area-img {
  margin-top: 4em;
  background-color: #FFF;
  width: 200px;
  height: 180px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-area-img img {
  height: 90%;
  width: 100%;
}

}
</style>
