<template>
  <div id="app">
    <template v-if="showLayoutComponents">
      <AppNavbar />
      <router-view></router-view>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import './assets/css/styles.css';
import AppNavbar from './components/organisms/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar
  },
  computed: {
    showLayoutComponents() {
      const excludedRoutes = ['AcompanharCurso', 'AssistirAula', 'RealizarLeitura'];
      return !excludedRoutes.includes(this.$route.name)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
