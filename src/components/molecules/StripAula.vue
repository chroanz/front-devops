<template>
    <div class="cards d-flex flex-row align-items-center px-4 position-relative">
        <div class="col-1">
            <img src="@/assets/icons/video-camera.svg" class="img-fluid">
        </div>
        <div class="col-1 text-center">{{ aula.sequencia }}</div>
        <div class="col-8 text-truncate px-2">{{ aula.titulo }}</div>
        <div class="col-2 text-end">
            {{ aula.duracaoMinutos }} min
            <div class="dropdown d-inline-block ms-2" @mouseenter="dropdownOpen = true" @mouseleave="dropdownOpen = false" v-if="user.user?.isAdmin">
                <button class="btn btn-sm btn-secondary">Ações</button>
                <ul v-show="dropdownOpen" class="dropdown-menu show" style="display:block; position:absolute; right:0; z-index:10;">
                    <li>
                        <button class="dropdown-item" @click="editarAula">Editar</button>
                    </li>
                    <li>
                        <button class="dropdown-item text-danger" @click="deletarAula">Deletar</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Aula } from '@/models/models';

export default { 
    name: "StripAula",
    props: {
        aula: Aula
    },
    data() {
        return {
            dropdownOpen: false,
            user: JSON.parse(sessionStorage.getItem('user') || '{}')
        }
    },
    methods: {
        editarAula() {
            this.$router.push({ path: `/aulas/edit-lesson/${this.aula.id}` });
        },
        deletarAula() {
            this.$emit('deletar', this.aula);
        }
    }
}
</script>

<style scoped>
.cards {
    height: 60px;
    border: 1px solid black;
    background-color: var(--color-primary);
    font-size: .75em;
    max-width: 30em;
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