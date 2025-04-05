<template>
    <div class="curso-container">
        <div id="superior" class="header-curso">
            <div class="col-4">
                <a @click="fecharCurso" role="button">
                    <SvgIcon icon="close" size="24px" color="#000000" />
                </a>
                <h3>{{ aulaAtual?.titulo || 'Carregando...' }}</h3>
            </div>
            <div class="header-right col-8">
                <h2 class="col-6">{{ curso?.nome }}</h2>
                <ProgressBar :progress=this.percentualProgresso />
                <a @click="proximaAtividade" :disabled="!temProximaAtividade" role="button" class="col-1">
                    <SvgIcon icon="arrow-right" size="32px" color="#000000" />
                </a>
            </div>
        </div>
        <div id="inferior" class="content-container">
            <div id="centro" class="content-principal">
                <router-view @atividade-concluida="atualizarProgresso"></router-view>
            </div>
            <div id="direita" class="lista-atividades">
                <template v-for="item in listaAtividades" :key="item.id">
                    <DetalheAula v-if="item.tipo === 'aula'" :aula="item" @click="navegarPara(item)"
                        :class="{ 'ativo': isAtividadeAtual(item) }" />
                    <DetalheLeitura v-else :leitura="item" @click="navegarPara(item)"
                        :class="{ 'ativo': isAtividadeAtual(item) }" />
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import DetalheAula from '@/components/molecules/DetalheAula.vue'
import DetalheLeitura from '@/components/molecules/DetalheLeitura.vue'
import SvgIcon from '@/components/atoms/SvgIcon.vue'
import ProgressBar from '@/components/molecules/ProgressBar.vue'
import { listaCursos } from '@/models/mock-data.js'

export default {
    name: 'AcompanhamentoComponent',
    components: {
        DetalheAula,
        DetalheLeitura,
        SvgIcon,
        ProgressBar
    },
    data() {
        return {
            curso: null,
            listaAtividades: [],
            atividadeAtual: null,
            percentualProgresso: 0
        }
    },
    computed: {
        temProximaAtividade() {
            const indexAtual = this.listaAtividades.findIndex(item =>
                this.isAtividadeAtual(item)
            )
            return indexAtual < this.listaAtividades.length - 1
        },
        aulaAtual() {
          return this.atividadeAtual  
        }
    },
    methods: {
        fecharCurso() {
            this.$router.push('/cursos')
        },
        async navegarPara(item) {
            const rota = item.tipo === 'aula' ? 'aula' : 'leitura'
            this.atividadeAtual = item
            await this.$router.push(`/curso/${this.curso.id}/acompanhar/${rota}/${item.id}`)
        },
        isAtividadeAtual(item) {
            return item.id == this.$route.params.atividadeId
        },
        proximaAtividade() {
            const indexAtual = this.listaAtividades.findIndex(item =>
                this.isAtividadeAtual(item)
            )
            if (indexAtual < this.listaAtividades.length - 1) {
                this.navegarPara(this.listaAtividades[indexAtual + 1])
            }
        },
        atualizarProgresso(id) {
            // Lógica para marcar atividade como concluída e atualizar progresso
            const idx = this.listaAtividades.findIndex((item) => item.id == id);
            if (this.listaAtividades[idx].tipo == 'aula') {
                this.listaAtividades[idx].vista = true;
            } else {
                this.listaAtividades[idx].lido = true;
            }

            const atividadesConcluidas = this.listaAtividades.filter(item => item.vista || item.lido).length
            this.percentualProgresso = Math.round((atividadesConcluidas / this.listaAtividades.length) * 100)
        }
    },
    async created() {
        const cursoId = parseInt(this.$route.params.id)
        this.curso = listaCursos.find(c => c.id === cursoId)
        if (this.curso) {
            // Combina aulas e leituras em uma única lista ordenada
            const aulas = this.curso.aulas.map(aula => ({
                ...aula,
                sequencia: aula.sequencia,
                tipo: 'aula',
                vista: false
            }))

            const leituras = this.curso.leituras.map(leitura => ({
                ...leitura,
                sequencia: leitura.sequencia,
                tipo: 'leitura',
                lido: false
            }))

            this.listaAtividades = [...aulas, ...leituras]
                .sort((a, b) => a.sequencia - b.sequencia)

            // Se não houver atividade selecionada, seleciona a primeira
            if (!this.$route.params.atividadeId && this.listaAtividades.length > 0) {
               await this.navegarPara(this.listaAtividades[0])
            } else {
                // Atualiza a aula atual
                const atividadeAtual = this.listaAtividades.find(item =>
                    this.isAtividadeAtual(item)
                )
                this.atividadeAtual = atividadeAtual
            }

        }
    }
}
</script>

<style scoped>
.curso-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: #000000;
}

.header-curso {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--color-secondary);
    color: #000000;
}

.header-curso>div {
    display: flex;
    align-items: center;
    gap: 2em;
    flex-grow: 1;
}

.content-container {
    display: flex;
    flex: 1;
}

.header-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-right>div {
    width: 30%;
}

.content-principal {
    flex: 1;
    min-width: 70%;

}

.lista-atividades {
    width: 30%;
    padding: 1rem;
    background-color: var(--color-secondary);
}

h2,
h3 {
    margin: 0
}
</style>