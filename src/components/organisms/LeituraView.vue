<template>
    <div class="aula-container">
        <div class="video-container">
            <!-- Componente de vídeo aqui -->
        </div>
        <div class="transcricao">
            <h3>{{ this.leituraAtual.titulo }}</h3>
            <div v-html="texto"></div>
        </div>
        <button @click="marcarComoConcluida" class="btn-concluir">
            Marcar como concluída
        </button>
    </div>
</template>

<script>
import { listaCursos } from '@/models/mock-data'
export default {
    name: 'AulaView',
    methods: {
        marcarComoConcluida() {
            this.$emit('atividade-concluida', this.$route.params.atividadeId)
        }
    },
    computed: {
        cursoId() {
            return parseInt(this.$route.params.id)
        },
        leituraId() {
            return parseInt(this.$route.params.atividadeId)
        },
        leituraAtual() {
            const curso = listaCursos.find(c => c.id === this.cursoId)
            return curso?.leituras.find(a => a.sequencia === this.leituraId) || {}
        },
        texto() {
            return this.leituraAtual.texto || 'Texto não disponível'
        }
    },
    emits: ['atividade-concluida']
}
</script>