<template>
  <div class="container-login">
    <div class="form-login-area">
      <div class="form-area-img">
        <img src="../../assets/images/logo.png" alt="Logo Librear">
      </div>
      <form action="#" class="form-login">
        <h2>Bem-vindo de volta</h2>

        <div class="input-container">
          <input type="text" id="email" required>
          <label for="email">E-mail</label>
        </div>

        <div class="input-container">
          <input type="password" id="password" required>
          <label for="password">Senha</label>
        </div>

        <button>Entrar</button>
        <a href="#">Esqueci a senha</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-login {
  width: 100%;
  height: 100vh;
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
  gap: 30px;
}

.form-area-img {
  margin-top: 10px;
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
</style>
