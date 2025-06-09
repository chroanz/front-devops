<template>
    <div class="cards d-flex flex-row align-items-center px-2 border-0 gap-3" role="button" :style="{
        'background-color': backgroundColor,
    }">
        <div class="col-auto">
            <SvgIcon icon="video-camera" :color=this.iconColor size="32px" />
        </div>
        <div class="col-auto text-center me-2">{{ aula.sequencia }}</div>
        <div class="flex-grow-1 text-truncate px-2">{{ aula.titulo }}</div>
        <div class="col-auto">{{ aula.duracaoMinutos }} min</div>
    </div>
</template>

<script>
import { Aula } from '@/models/models';
import SvgIcon from '@/components/atoms/SvgIcon.vue';

export default {
    name: "DetalheAula",
    computed: {
        iconColor() {
            return this.aula.visto
                ? getComputedStyle(document.documentElement)?.getPropertyValue('--color-action')?.trim()
                : '#000000'
        },
        backgroundColor() {
            return this.active
                ? getComputedStyle(document.documentElement)?.getPropertyValue('--color-secondary')?.trim()
                : this.color
        }
    },
    props: {
        aula: Aula,
        color: {
            type: String,
            default: getComputedStyle(document.documentElement)?.getPropertyValue('--color-primary')?.trim() ?? '#ffffff'
        },
        active: {
            type: Boolean,
            default: false
        },
    },
    components: {
        SvgIcon
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards {
    min-height: 60px;
    border: 1px solid black;
    width: 100%;
    font-size: .75em;
    padding: 0.5rem;
}

.cards:hover {
    background-color: var(--color-secondary-hover) !important;
}

@media (max-width: 767px) {
    .cards {
        font-size: 0.875em;
    }
}

.img-fluid {
    max-height: 40px;
    width: auto;
}
</style>