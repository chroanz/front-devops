<template>
    <div class="container">
        <div class="d-flex flex-column p-3 gap-4">
            <div class="row" v-for="curso in cursos" :key="curso.id">
                <a href="/curso/{{ curso.id }}">
                    <CardCurso :curso="curso" :matriculavel="true" @navigate="handleNavigate" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import CardCurso from '../organisms/CardCurso.vue';

export default {
    name: 'CoursesPage',
    data() {
        return {
            cursos: [
                {
                    id: 1, nome: 'Aprendendo Libras', descricao: 'Aprenda a utilizar a Língua Brasileira de Sinais (Libras) e garanta o atendimento e o tratamento adequado às pessoas com deficiência auditiva', imagem: 'curso_libras.png', aulas: [
                        {
                            sequencia: 1,
                            titulo: 'Teste',
                            duracaoMinutos: 3
                        },
                        {
                            sequencia: 2,
                            titulo: 'Teste 2',
                            duracaoMinutos: 4
                        }
                    ],
                    exercicios: [
                        {
                            sequencia: 1,
                            titulo: 'Teste 1'
                        },
                        {
                            sequencia: 2,
                            titulo: 'Teste 3'
                        }
                    ]
                },
                {
                    id: 2, nome: 'Curso 2', descricao: 'Descrição do curso 2', imagem: 'curso_libras.png', aulas: [
                        {
                            sequencia: 1,
                            titulo: 'Teste',
                            duracaoMinutos: 3
                        },
                        {
                            sequencia: 2,
                            titulo: 'Teste 2',
                            duracaoMinutos: 4
                        }
                    ],
                    exercicios: [
                        {
                            sequencia: 1,
                            titulo: 'Teste 1'
                        },
                        {
                            sequencia: 2,
                            titulo: 'Teste 3'
                        }
                    ]
                }
            ]
        }
    },
    components: {
        CardCurso
    },
    methods: {
        handleNavigate(cursoId) {
            this.$router.push({ name: 'detalhe-curso', params: { id: cursoId } });
        }
    }
}
</script>