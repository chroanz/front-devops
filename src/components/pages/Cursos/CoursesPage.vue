<template>
  <div class="container">
    <div class="d-flex flex-column p-3 gap-4">
      <div v-if="loading" class="text-center p-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Carregando...</span>
        </div>
      </div>
      <div v-else-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
      <div v-else class="d-flex flex-column p-3 gap-4">
        <div class="row" v-for="curso in cursos" :key="curso.id">
          <span role="button" @click="goToCourse(curso.id)">
            <CardCurso
              :curso="curso"
              :matriculavel="false"
              @navigate="handleNavigate"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCurso from "@/components/organisms/CardCurso.vue";
import cursoService from "@/services/cursoService.js";

export default {
  name: "CoursesPage",
  props: {
    term: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      cursos: [],
      loading: false,
      error: null,
    };
  },
  components: {
    CardCurso,
  },
  watch: {
    term(newTerm) {
      this.fetchCursos(newTerm);
    },
  },
  methods: {
    handleNavigate(url) {
      this.$router.push(url);
    },
    goToCourse(id) {
      this.$router.push(`/curso/${id}`);
    },
    async fetchCursos(searchTerm = null) {
      this.loading = true;
      this.error = null;
      try {
        const response = await cursoService.listarCursos(searchTerm);
        this.cursos = response;
      } catch (err) {
        console.error("Erro ao buscar cursos:", err);
        this.error =
          "Não foi possível carregar os cursos. Tente novamente mais tarde.";
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchCursos(this.term);
  },
};
</script>
