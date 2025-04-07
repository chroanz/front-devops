<template>
    <div class="container">
        <div class="d-flex flex-column p-3 gap-4">
            <div class="row" v-for="curso in this.cursos" :key="curso.id">
                    <CardCurso :curso="curso" :matriculavel="true" @navigate="handleNavigate" />
            </div>
        </div>
    </div>
</template>

<script>
import CardCurso from '@/components/organisms/CardCurso.vue';
import { listaCursos } from '@/models/mock-data'

export default {
    name: 'CoursesPage',
    data() {
        return {
            cursos: []
        }
    },
    components: {
        CardCurso
    },
    methods: {
        handleNavigate(url) {
            this.$router.push(url);
        }
    },
    created() {
        this.cursos = listaCursos;
    }
}
</script>