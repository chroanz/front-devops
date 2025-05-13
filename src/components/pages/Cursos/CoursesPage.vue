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
                <button @click="retryFetch" class="btn btn-outline-danger ms-2">
                    Tentar novamente
                </button>
            </div>
            <div v-else-if="cursos.length === 0" class="text-center">
                <p>Nenhum curso encontrado{{ term ? ' para sua busca' : '' }}</p>
            </div>
            <div v-else class="d-flex flex-column p-3 gap-4">
                <div class="row" v-for="curso in cursos" :key="curso.id">
                    <span role="button" @click="goToCourse(curso.id)">
                        <CardCurso 
                            :curso="curso" 
                            :matriculavel="false" 
                            @navigate="handleNavigate"
                            @error="handleError" 
                        />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardCurso from '@/components/organisms/CardCurso.vue';
import axios from 'axios';


export default {
    name: 'CoursesPage',
    components: {
        CardCurso
    },
    props: {
        term: {
            type: String,
            default: null
        },
    },
    data() {
        return {
            cursos: [],
            loading: false,
            error: null,
            baseUrl: process.env.VUE_APP_API_URL || 'http://localhost:8000/api'
        }
    },
    methods: {
        handleNavigate(url) {
            if (url) {
                this.$router.push(url);
            }
        },
        handleError(error) {
            this.error = error;
        },
        goToCourse(id) {
            if (id) {
                this.$router.push(`/curso/${id}`);
            }
        },
        async retryFetch() {
            this.error = null;
            await this.fetchCursos(this.term);
        },
        async fetchCursos(searchTerm = null) {
            this.loading = true;
            this.error = null;
            
            try {
                let url = `${this.baseUrl}/cursos`;
                if (searchTerm?.trim()) {
                    url += `/search/${encodeURIComponent(searchTerm.trim())}`;
                }
                
                const response = await axios.get(url);
                
                if (response.data) {
                    this.cursos = Array.isArray(response.data) ? response.data : [];
                } else {
                    throw new Error('Formato de dados inválido');
                }
            } catch (err) {
                console.error('Erro ao buscar cursos:', err);
                this.error = 'Não foi possível carregar os cursos. Tente novamente mais tarde.';
                this.cursos = [];
            } finally {
                this.loading = false;
            }
        }
    },
    watch: {
        term: {
            handler(newTerm) {
                this.fetchCursos(newTerm);
            },
            immediate: true
        }
    },
    created() {
        this.fetchCursos(this.term);
    }
}
</script>

<style scoped>
.container {
    min-height: 200px;
}
</style>