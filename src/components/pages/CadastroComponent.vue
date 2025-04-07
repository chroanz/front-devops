<template>
    <div class="container-login">
      <div class="form-login-area">
        <div class="form-area-img">
          <img src="../../assets/images/logo.png" alt="Logo Librear" />
        </div>
        <form action="#" class="form-login">
          <h2>Crie sua conta</h2>
  
          <div class="input-container">
            <input type="text" id="name" required />
            <label for="name">Nome</label>
          </div>
  
          <div class="input-container">
            <input type="email" id="email" required />
            <label for="email">E-mail</label>
          </div>
  
          <div class="input-container">
            <input type="password" id="password" required />
            <label for="password">Senha</label>
          </div>
  
          <button type="submit">Cadastrar</button>
          <a href="#">Já tem uma conta? Entrar</a>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
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
  
  @media (max-width: 600px) {
    .form-login-area {
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
      width: 90%;
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
  