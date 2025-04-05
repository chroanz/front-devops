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
}

.detalhes {
    display: flex;
    justify-content: space-between;
}

.left {
    text-align: start;
}

.right {
    text-align: end;
}

.strips {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>