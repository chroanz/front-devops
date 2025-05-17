<template>
    <div class="svg-container" :style="containerStyle" v-html="svgContent"></div>
</template>

<script>
export default {
    name: 'SvgIcon',
    props: {
        icon: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: 'currentColor'
        },
        size: {
            type: String,
            default: '24px'
        }
    },
    computed: {
        containerStyle() {
            return {
                width: this.size,
                height: this.size,
                display: 'inline-block',
                color: this.color
            }
        },
        svgContent() {
            try {
                const svg = require(`@/assets/icons/${this.icon}.svg?raw`);
                return svg.replace(/fill="[^"]*"/g, `fill="${this.color}"`);
            } catch (error) {
                console.error(`Erro ao carregar o ícone: ${this.icon}`, error);
                return '';
            }
        }
    }
}
</script>

<style scoped>
.svg-container {
    line-height: 0;
}

.svg-container :deep(svg) {
    width: 100%;
    height: 100%;
}
</style>