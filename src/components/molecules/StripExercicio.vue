<template>
    <div class="cards d-flex flex-row align-items-center px-2">
        <div class="col-1">
            <img src="../../assets/images/book.svg" class="img-fluid">
        </div>
        <div class="col-1 text-center">{{ exercicio.sequencia }}</div>
        <div class="col-8 text-truncate px-2">{{ exercicio.titulo }}</div>
    </div>
</template>

<script>
import { Exercicio } from '@/models/models';

export default {
    name: "StripExercicio",
    props: {
        exercicio:Exercicio
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