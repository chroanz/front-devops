<template>
    <div class="container"  v-if="this.curso.nome">
        <div>
            <CardCurso :curso="this.curso" :matriculavel="true" @navigate="handleNavigate"/>
        </div>
        <div class="detalhes">
            <div class="left">
                <div>Aulas</div>
                <div class="strips">
                    <StripAula v-for="aula in this.curso.aulas ?? []" :key="aula.sequencia"
                        :aula="aula" />
                </div>
            </div>
            <div class="right">
                <div>Exercícios</div>
                <div class="strips">
                    <StripExercicio v-for="exercicio in this.curso.exercicios ?? []" :key="exercicio.sequencia"
                        :exercicio="exercicio" />
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        Curso não encontrado!
    </div>
</template>
<script>
import CardCurso from '../organisms/CardCurso.vue';
import StripAula from '../molecules/StripAula.vue';
import StripExercicio from '../molecules/StripExercicio.vue';

export default {
    name: 'DetalheCursoComponent',
    data() {
        return {
            cursos: {
                1: {
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
                }
            },
            curso: {}
        }
    },
    components: {
        CardCurso,
        StripAula,
        StripExercicio
    },
    methods: {
        handleNavigate(path) {
            this.$router.push(path)
        }
    },
    mounted() {
        const id = this.$route.params.id;
        if (!this.cursos[id]) {
            console.log('Curso não existe')
            return;
        }
        this.curso = this.cursos[id]
    }
}
</script>
<style scoped>
.container{
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 2em;
}
.detalhes{
    display: flex;
    justify-content: space-between;
}
.left{
    text-align: start;
}
.right{
    text-align: end;
}
.strips{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>