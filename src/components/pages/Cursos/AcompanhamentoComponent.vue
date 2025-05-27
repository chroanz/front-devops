<template>
    <div class="curso-container">
        <div id="superior" class="header-curso">
            <div class="col-auto d-flex align-items-center gap-3">
                <a @click="fecharCurso" role="button">
                    <SvgIcon icon="close" size="24px" color="#000000" />
                </a>
                <a @click="toggleMenu" role="button" class="d-md-none">
                    <SvgIcon icon="menu" size="24px" color="#000000" />
                </a>
                <h6 class="d-none d-md-block">{{ aulaAtual?.titulo || 'Carregando...' }}</h6>
            </div>
            <div class="header-right flex-grow-1">
                <h4 class="d-none d-md-block col-6">{{ this.curso?.titulo }}</h4>
                <ProgressBar :progress=this.percentualProgresso class="flex-grow-1" />
                <a @click="proximaAtividade" :disabled="!temProximaAtividade" role="button" class="col-auto">
                    <SvgIcon icon="arrow-right" size="32px" color="#000000" />
                </a>
            </div>
        </div>
        <div id="inferior" class="content-container">
            <div id="centro" class="content-principal">
                <router-view :key="$route.fullPath" @atividade-concluida="atualizarProgresso"></router-view>
            </div>
            <div id="direita" class="lista-atividades" :class="{ 'menu-active': menuActive }">
                <div class="lista-header d-md-none">
                    <a @click="toggleMenu" role="button">
                        <SvgIcon icon="close" size="24px" color="#000000" />
                    </a>
                </div>
                <template v-for="item in listaAtividades" :key="item.id">
                    <DetalheAula v-if="item.tipo === 'aula'" :aula="item" @click="navegarPara(item)"
                        :active="isAtividadeAtual(item)" />
                    <DetalheLeitura v-else :leitura="item" @click="navegarPara(item)"
                        :active="isAtividadeAtual(item)" />
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
import cursoService from '@/services/cursoService'

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
            percentualProgresso: 0,
            menuActive: false
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
        toggleMenu() {
            this.menuActive = !this.menuActive;
        },
        async navegarPara(item) {
            const rota = item.tipo === 'aula' ? 'aula' : 'leitura'
            this.atividadeAtual = item
            await this.$router.push(`/curso/${this.curso.id}/acompanhar/${rota}/${item.id}`)
            if (window.innerWidth < 768) {
                this.menuActive = false;
            }
        },
        isAtividadeAtual(item) {
            return item.id == this.$route.params.atividadeId && this.$route.fullPath.includes(item.tipo)
        },
        proximaAtividade() {
            const indexAtual = this.listaAtividades.findIndex(item =>
                this.isAtividadeAtual(item)
            )
            if (indexAtual < this.listaAtividades.length - 1) {
                this.navegarPara(this.listaAtividades[indexAtual + 1])
            }
        },
        atualizarProgresso(id, tipo) {
            // Lógica para marcar atividade como concluída e atualizar progresso
            const idx = this.listaAtividades.findIndex((item) => item.id == id && item.tipo == tipo);
            this.listaAtividades[idx].visto = true;
            const atividadesConcluidas = this.listaAtividades.filter(item => item.visto).length
            this.percentualProgresso = Math.round((atividadesConcluidas / this.listaAtividades.length) * 100)
        }
    },

    //Carol
    async created() {
        const cursoId = parseInt(this.$route.params.id)
        try {
            const cursoAtual = await cursoService.get(cursoId);
            this.curso = cursoAtual
            if (this.curso) {
                const aulas = this.curso.aulas.map(aula => ({
                    ...aula,
                    sequencia: aula.sequencia,
                    tipo: 'aula',
                    visto: aula.visto
                }))

                const leituras = this.curso.leituras.map(leitura => ({
                    ...leitura,
                    sequencia: leitura.sequencia,
                    tipo: 'leitura',
                    visto: leitura.visto
                }))

                this.listaAtividades = [...aulas, ...leituras]
                    .sort((a, b) => a.sequencia - b.sequencia)

                
                if (!this.$route.params.atividadeId && this.listaAtividades.length > 0) {
                    await this.navegarPara(this.listaAtividades[0])
                } else {
                    // Atualiza a aula atual
                    const atividadeAtual = this.listaAtividades.find(item =>
                        this.isAtividadeAtual(item)
                    )
                    this.atividadeAtual = atividadeAtual
                }
                const atividadesConcluidas = this.listaAtividades.filter(item => item.visto).length
                this.percentualProgresso = Math.round((atividadesConcluidas / this.listaAtividades.length) * 100)
            }
        } catch (error) {
            if (error.response && error.response.status === 403) {
                alert('Você não está matriculado nesse curso');
                this.$router.push('/cursos'); // Redireciona para a lista de cursos
            } else {
                alert('Ocorreu um erro ao carregar o curso');
            }
        }
    },

}
</script>

<style scoped>
.curso-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: #000000;
    overflow: hidden;
}

.header-curso {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--color-secondary);
    color: #000000;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-curso>div {
    display: flex;
    align-items: center;
    gap: 2em;
    flex-grow: 1;
}

.header-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.header-right>div {
    width: 30%;
}

.content-container {
    display: flex;
    flex: 1;
    position: relative;
    overflow: hidden;
}

.content-principal {
    flex: 1;
    min-width: 70%;
    overflow-y: auto;
}

.lista-atividades {
    width: 30%;
    background-color: var(--color-secondary);
    overflow-y: auto;
}

.lista-header {
    padding: 1rem;
    text-align: right;
}

h1,
h2,
h3,
h4,
h5 h6 {
    margin: 0
}

@media (max-width: 767px) {
    .lista-atividades {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        height: 100vh;
        z-index: 1000;
        transition: right 0.3s ease;
    }

    .lista-atividades.menu-active {
        right: 0;
    }

    .content-principal {
        width: 100%;
    }
}
</style>