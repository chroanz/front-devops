<template>
    <div class="form-group position-relative div-barra-de-busca">
        <input class="barra-de-busca" type="text" name="busca" id="busca" placeholder="Pesquise um curso ou categoria">
        <img src="../../public/lupa.svg" alt="Ícone de lupa" class="icone-lupa">
    </div>
</template>

<script>

    export default {
        name: 'BarraDeBusca',
        data() {
            return {
                busca: ''
            }
        }
    }
</script>

<style>

    .div-barra-de-busca {
        width: clamp(300px, 100%, 450px);
    }

    .icone-lupa {
        width: 1.2rem;
        position: absolute;
        z-index: 1;
        top: 1.1rem;
        left: 1rem;
    }

    .barra-de-busca {
        padding: 1rem 3rem;
        width: 100%;
        border-radius: 5rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: var(--bs-body-color);
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: var(--bs-body-bg);
        background-clip: padding-box;
        border: var(--bs-border-width) solid var(--bs-border-color);
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
</style>