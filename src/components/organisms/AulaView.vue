<template>
    <div v-if="!loading" class="aula-container">
        <div class="video-container">
            <iframe v-if="isYoutubeVideo" :src="embedYoutubeUrl" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <video v-else controls :src="aulaAtual?.videoUrl" class="video-player">
                Seu navegador não suporta a tag de vídeo.
            </video>
        </div>
        <div class="transcricao">
            <h3>Transcrição</h3>
            <div v-html="transcricao"></div>
        </div>
        <button @click="marcarComoConcluida" class="btn btn-primary action" :disabled="disabled">
            Marcar como concluída
        </button>
    </div>
</template>

<script>
import aulaService from '@/services/aulaService'

export default {
    name: 'AulaView',
    data() {
        return {
            aulaAtual: null,
            loading: true,
            disabled: true
        }
    },
    computed: {
        cursoId() {
            return parseInt(this.$route.params.id)
        },
        aulaId() {
            return parseInt(this.$route.params.atividadeId)
        },
        isYoutubeVideo() {
            console.log(this.aulaAtual.videoUrl)
            return this.aulaAtual.videoUrl?.includes('youtube.com') ||
                this.aulaAtual.videoUrl?.includes('youtu.be')
        },
        embedYoutubeUrl() {
            if (!this.isYoutubeVideo) return ''
            const videoId = this.getYoutubeVideoId(this.aulaAtual.videoUrl)
            return `https://www.youtube.com/embed/${videoId}`
        },
        transcricao() {
            return this.aulaAtual.transcricao || 'Transcrição não disponível'
        }
    },
    async created() {
        const aula = await aulaService.get(this.aulaId);
        this.aulaAtual = aula;
        this.loading = false;
        setTimeout(() => {
            this.disabled = false;
        }, 5000);
    },
    methods: {
        getYoutubeVideoId(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
            const match = url.match(regExp)
            return (match && match[2].length === 11) ? match[2] : null
        },
        async marcarComoConcluida() {
            try {
                await aulaService.marcarVisto(this.aulaId);
                this.aulaAtual.visto = true;
            } catch (error) {
                this.$toast({
            message: error.response.data.msg || "Erro ao marcar atividade como concluída",
            title: "Erro ao marcar atividade",
            type: "error",
          });
                console.log(error)
            }
            this.$emit('atividade-concluida', this.$route.params.atividadeId, 'aula');
        }
    },
    emits: ['atividade-concluida'],
}
</script>

<style scoped>
.video-container {
    position: relative;
    padding-bottom: 56.25%;
    /* Proporção 16:9 */
    height: 0;
    overflow: hidden;
    margin-bottom: 20px;
}
.action{
    background-color: var(--color-action);
}

.video-container iframe,
.video-container .video-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>