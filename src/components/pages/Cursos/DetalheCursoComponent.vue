<template>
    <div class="container" v-if="this.curso.nome">
        <div>
            <CardCurso :curso="this.curso" :matriculavel="true" @navigate="handleNavigate" />
        </div>
        <div class="detalhes">
            <div class="left">
                <div>Aulas</div>
                <div class="strips">
                    <StripAula v-for="aula in this.curso.aulas ?? []" :key="aula.sequencia" :aula="aula" color="#ffffff"
                        :marcarVisto=false />
                </div>
            </div>
            <div class="right">
                <div>Leituras</div>
                <div class="strips">
                    <StripLeitura v-for="leitura in this.curso.leituras ?? []" :key="leitura.sequencia"
                        :leitura="leitura" :marcarVisto=true />
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        Curso não encontrado!
    </div>
</template>
<script>
import CardCurso from '@/components/organisms/CardCurso.vue';
import StripAula from '@/components/molecules/StripAula.vue';
import { listaCursos } from '@/models/mock-data';
import StripLeitura from '@/components/molecules/StripLeitura.vue';

export default {
    name: 'DetalheCursoComponent',
    data() {
        return {
            cursos: listaCursos,
            curso: {}
        }
    },
    components: {
        CardCurso,
        StripAula,
        StripLeitura
    },
    methods: {
        handleNavigate(path) {
            this.$router.push(path)
        }
    },
    mounted() {
        const id = this.$route.params.id;
        const existente = this.cursos.find(curso => curso.id == id);
        if (!existente) {

            console.log('Curso não existe')
            return;
        }
        this.curso = existente;
    }
}
</script>
<style scoped>
.container {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin: 0 auto;
    padding: 1em;
}

.detalhes {
    display: flex;
    justify-content: space-between;
    gap: 2em;
}

.left {
    text-align: start;
    flex: 1;
}

.right {
    text-align: end;
    flex: 1;
}

.strips {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

@media (max-width: 768px) {
    .container {
        width: 95%;
    }

    .detalhes {
        flex-direction: column;
    }

    .right {
        text-align: start;
    }

    .strips {
        margin-top: 1em;
    }
}

@media (max-width: 480px) {
    .container {
        width: 100%;
        padding: 0.5em;
    }
}
</style>