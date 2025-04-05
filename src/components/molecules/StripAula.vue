<template>
    <div class="cards d-flex flex-row align-items-center px-2">
        <div class="col-1">
            <img src="@/assets/icons/video-camera.svg" class="img-fluid">
        </div>
        <div class="col-1 text-center">{{ aula.sequencia }}</div>
        <div class="col-8 text-truncate px-2">{{ aula.titulo }}</div>
        <div class="col-2 text-end">{{ aula.duracaoMinutos }} min</div>
    </div>
</template>

<script>
import { Aula } from '@/models/models';

export default {
    name: "StripAula",
    props: {
        aula: Aula
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards {
    height: 60px;
    border: 1px solid black;
    background-color: var(--color-primary);
    width: 30em;
    font-size: .75em;
}

.img-fluid {
    max-height: 40px;
    width: auto;
}
</style>