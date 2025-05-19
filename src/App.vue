<template>
  <div id="app">
    <LoaderComponent />
    <div class="visual-overlay" :class="currentFilter"></div>
    <div id="deficiencias" class="deficiencias">
      <div class="icon-wrapper" @click="toggleMenu">
        <SvgIcon icon="visao" size="48px" />
      </div>
      <div class="menu_deficiencias" v-show="showMenu">
        <ul>
          <li @click="setFilter('normal')">Visão Comum</li>
          <li @click="setFilter('blurred')">Visão Prejudicada</li>
          <li @click="setFilter('retina')" >Deslocamento de Retina</li>
          <li @click="setFilter('peripheral')">Perda Periférica</li>
          <li @click="setFilter('central')">Perda Central</li>
        </ul>
      </div>
    </div>
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
import '@/assets/css/styles.css';
import AppNavbar from './components/organisms/AppNavbar.vue';
import SvgIcon from './components/atoms/SvgIcon.vue';
import LoaderComponent from './components/atoms/LoaderComponent.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    SvgIcon,
    LoaderComponent
  },
  data() {
    return {
      showMenu: false,
      currentFilter: 'normal'
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    setFilter(filter) {
      this.currentFilter = filter;
      this.showMenu = false;
    }
  }
  ,
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

.visual-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 99;
  transition: all 0.3 ease;
}

.normal {
  display: none;
}

/* Filtro para visão embaçada */
.blurred {
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.1);
}

/* Filtro para deslocamento de retina */
.retina {
  backdrop-filter: blur(1px) brightness(1.1);
  background: linear-gradient(135deg, transparent 45%, rgba(0, 0, 0, 0.9) 50%);
}

/* Filtro para perda de visão periférica */
.peripheral {
  background: radial-gradient(circle at center,
      transparent 10%,
      rgba(0, 0, 0, 0.9) 50%);
}

/* Filtro para perda de visão central */
.central {
  background: radial-gradient(circle at center,
      rgba(0, 0, 0, 1) 20%,
      transparent 40%);
}

.deficiencias {
  position: fixed;
  bottom: 5%;
  right: 10px;
  display: flex;
  align-items: center;
  z-index: 100;
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  background-color: var(--color-secondary);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.menu_deficiencias {
  position: absolute;
  right: 100%;
  bottom: 0;
  background-color: var(--color-secondary);
  border-radius: 8px;
  padding: 8px;
  margin-right: 10px;
  min-width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.menu_deficiencias ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu_deficiencias li {
  padding: 8px 12px;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.menu_deficiencias li:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
