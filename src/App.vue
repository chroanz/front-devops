<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './assets/styles.css';

export default {
  name: 'App' 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
