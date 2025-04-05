<template>
    <div class="cards d-flex flex-row align-items-center px-2 border-0" role="button" :style="{
        'background-color': backgroundColor,
    }">
        <div class="col-1">
            <SvgIcon icon="book" :color=this.iconColor size="32px" />
        </div>
        <div class="col-1 text-center">{{ leitura.sequencia }}</div>
        <div class="col-8 text-truncate px-2">{{ leitura.titulo }}</div>
        <div class="col-2 text-end"></div>
    </div>
</template>

<script>
import { Leitura } from '@/models/models';
import SvgIcon from '@/components/atoms/SvgIcon.vue';

export default {
    name: "DetalheExercicio",
    computed: {
        iconColor() {
            return this.leitura.lido
                ? getComputedStyle(document.documentElement)?.getPropertyValue('--color-verde')?.trim()
                : '#000000'
        },
        backgroundColor() {
            return this.active
                ? getComputedStyle(document.documentElement)?.getPropertyValue('--color-secondary-active')?.trim()
                : this.color
        }
    },
    props: {
        leitura: Leitura,
        color: {
            default: getComputedStyle(document.documentElement)?.getPropertyValue('--color-secondary')?.trim() ?? '#ffffff'
        },
        active: {
            type: Boolean,
            default: false
        }
    },
    emits: ['lido'],
    components: {
        SvgIcon
    },
    methods: {
        handleClick() {
            this.$emit('lido', true)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards {
    height: 60px;
    border: 1px solid black;
    width: 100%;
    font-size: .75em;
}

.cards:hover {
    background-color: var(--color-secondary-hover) !important;
}

.img-fluid {
    max-height: 40px;
    width: auto;
}
</style>