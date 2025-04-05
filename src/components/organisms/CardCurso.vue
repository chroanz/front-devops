<template>
    <div class="card_curso">
        <div class="top">
            <div>
                <img :src="getImageUrl(curso.imagem)">
            </div>
            <div class="textos">
                <h2>{{ curso.nome }}</h2>
                <p>{{ curso.descricao }}</p>
            </div>
            <div><img :src="infoSrc" class="icone"></div>
        </div>
        <div class="bottom">
            <div>{{ curso.aulas?.length ?? 0 }} Aulas</div>
            <div> <button class="btn-matricula" @click="handleMatricula" v-if="matriculavel && !this.matriculado">
                    Fazer Matrícula
                </button></div>
            <div>{{ curso.leituras?.length ?? 0 }} Leituras</div>
        </div>
    </div>
</template>
<script>
import info from '@/assets/images/info.svg';

export default {
    name: "CardCurso",
    data() {
        return {
            user: {},
            infoSrc: info,
            matriculado: Boolean
        }
    },
    props: {
        curso: Object,
        matriculavel: Boolean
    },
    emits: ['navigate'],
    mounted() {
        this.matriculado = false;
        const user = JSON.parse(localStorage.getItem('loggedUser') ?? '{}');
        this.user = user;
        const matriculados = user.cursos_matriculados ?? [];
        this.matriculado = matriculados.includes(this.curso.id ?? 0);
    },
    methods: {
        getUser() {
            if (!this.user?.id) {
                return undefined;
            }
            return this.user;
        },
        getImageUrl(name) {
            return require(`@/assets/images/${name}`);
        },
        handleMatricula() {
            if (this.getUser()) {
                alert('Matrícula habilitada')
            } else {
                alert('Não logado');
                this.$emit('navigate', '/login');
            }
        }
    }
}
</script>

<style scoped>
.bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
}

.top img {
    width: 300px;
    height: 170px;
    border-radius: 20px;
}

.textos {
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: justify;
}

.card_curso {
    background-color: var(--color-secondary);
    border-radius: 20px;
    padding: 2em;
    display: flex;
    flex-direction: column;
    gap: 2em;
}

.btn-matricula {
    padding: 0.5em 3em;
    background-color: var(--color-action);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.3s;
}

.btn-matricula:hover {
    opacity: 1;
}

img.icone {
    width: 16px;
    height: 16px;
}
</style>
