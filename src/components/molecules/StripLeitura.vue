<template>
    <div class="cards d-flex flex-row align-items-center px-4 position-relative">
        <div class="col-1">
            <img src="@/assets/icons/book.svg" class="img-fluid">
        </div>
        <div class="col-1 text-center">{{ leitura.sequencia }}</div>
        <div class="col-8 text-truncate px-2">{{ leitura.titulo }}</div>
        <div class="col-2 text-end">
            <div class="dropdown" @mouseenter="dropdownOpen = true" @mouseleave="dropdownOpen = false" style="display:inline-block;">
                <button class="btn btn-sm btn-secondary">Ações</button>
                <ul v-show="dropdownOpen" class="dropdown-menu show" style="display:block; position:absolute; right:0; z-index:10;">
                    <li>
                        <button class="dropdown-item" @click="$emit('editar', leitura)">Editar</button>
                    </li>
                    <li>
                        <button class="dropdown-item text-danger" @click="$emit('deletar', leitura)">Deletar</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Leitura } from '@/models/models';

export default {
    name: "StripLeitura",
    props: {
        leitura: Leitura
    },
    data() {
        return {
            dropdownOpen: false
        }
    }
}
</script>

<style scoped>
.cards {
    height: 60px;
    border: 1px solid black;
    background-color: var(--color-primary);
    max-width: 30em;
    font-size: .75em;
    position: relative;
}

.img-fluid {
    max-height: 40px;
    width: auto;
}
.dropdown-menu {
    min-width: 8rem;
}
</style>