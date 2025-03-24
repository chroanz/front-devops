
<template>
  <div id="app">
  <AppNavbar />

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import AppNavbar from './components/AppNavbar.vue'; // Importando a Navbar

export default {
  name: 'App',
  components: {
    AppNavbar, // Registrando a Navbar
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
