<template>
    <div class="template">
        <div class="container-login">
          <div class="card card-login" style="height: 100%;">
            <div class="area-logo">
              <img src="../assets/images/logo.png" class="card-img-top" alt="...">

            </div>
            <div class="card-body">
              <h1 class="card-title display-4">Bem-vindo de volta</h1>
              <form action="">
                <div class="mb-3">
                  <!-- <label for="exampleFormControlInput1" class="form-label">Email address</label> -->
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>

                <div class="mb-3">
                  <!-- <label for="password" class="form-label">Example textarea</label> -->
                  <input type="password" class="form-control" id="password" placeholder="senha">
                </div>

                <div class="input-group mb-3">
                    <button class="btn btn-primary">Entrar</button>
                </div>
              </form>
            </div>
          </div>

        </div>
    </div>
</template>
  
  <script setup>
  /* eslint-disable vue/multi-word-component-names */
  
 
  
  </script>
  
<style scoped>
.template{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-login{
  width: 40%;
  max-width: 600px;
  height: 65%;
}

.card-login{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  border-radius: 30px;
  background-color: #B288C0;
  
}

.area-logo{
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-img-top{
  height: 140px;
  width: auto ;
}

.card-body{
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
  
}

.card-title{
  text-align: center;
  height: 20%;
  width: 80%;
}

.card-body form{
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.card-body form input{
  padding: 15px;
  font-size: 1.2em;
}

.card-body form button{
  padding: 15px;
  width: 100%;
  background-color: #2176AE;
}
</style>
  