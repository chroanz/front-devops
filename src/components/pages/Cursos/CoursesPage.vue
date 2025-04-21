<template>
    <div class="container">
        <div class="d-flex flex-column p-3 gap-4">
            <div class="row" v-for="curso in this.cursos" :key="curso.id">
                <span role="button" @click="goToCourse(curso.id)">
                    <CardCurso :curso="curso" :matriculavel="false" @navigate="handleNavigate" />
                </span>
            </div>
        </div>
        <Toast
            v-if="showToast"
            message="Lista de cursos carregada com sucesso!"
            title="Sucesso"
            background="#28a745"
            color="#ffffff"
            @close="showToast = false"
        />
    </div>
</template>

<script>
import CardCurso from '@/components/organisms/CardCurso.vue';
import cursoService from '@/services/cursoService';
import Toast from '@/components/organisms/Toast.vue';

export default {
    name: 'CoursesPage',
    data() {
        return {
            cursos: [],
            showToast: false
        }
    },
    components: {
        CardCurso,
        Toast
    },
    methods: {
        handleNavigate(url) {
            this.$router.push(url);
        },
        goToCourse(id) {
            this.$router.push(`/curso/${id}`)
        }
    },
    created() {
        cursoService.listarCursos().then((cursos) => {
            this.cursos = cursos;
            this.showToast = true;
        });
    }
}
</script>