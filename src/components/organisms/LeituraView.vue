<template>
    <div v-if="!loading" class="aula-container">
        <div class="transcricao">
            <h3>{{ this.leituraAtual.titulo }}</h3>
            <div v-html="texto"></div>
        </div>
    </div>
    <button @click="marcarComoConcluida" class="btn btn-primary action" :disabled="disabled">
        Marcar como concluída
    </button>
</template>

<script>
import leituraService from '@/services/leituraService'


export default {
    name: 'AulaView',
    methods: {
        async marcarComoConcluida() {
            try {
                await leituraService.marcarVisto(this.leituraId);
                this.$emit('atividade-concluida', this.$route.params.atividadeId, 'leitura')
            } catch (error) {
                if (error.response) {
                    this.$toast({
                        message: error.response.data.msg,
                        title: 'Erro ao marcar como visto',
                        type: 'error'
                    })
                } else {
                    console.error(error.message)
                }
            }
        }
    },
    data() {
        return {
            leituraAtual: null,
            loading: true,
            disabled: true
        }
    },
    computed: {
        cursoId() {
            return parseInt(this.$route.params.id)
        },
        leituraId() {
            return parseInt(this.$route.params.atividadeId)
        },
        texto() {
            return this.leituraAtual.conteudo || 'Texto não disponível'
        }
    },
    async created() {
        try {
            const leitura = await leituraService.get(this.leituraId);
            this.leituraAtual = leitura;
            setTimeout(() => {
            this.disabled = false;
        }, this.texto.length * 10);
            this.loading = false;
        }
        catch (error) {
            console.log(error)

        }
    },
    emits: ['atividade-concluida'],
}
</script>
<style scoped>
.action {
    background-color: var(--color-action);
}

.aula-container {
    padding: 8px
}
</style>