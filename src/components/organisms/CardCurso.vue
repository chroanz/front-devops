<template>
    <div class="card_curso">
        <div class="top">
            <div>
                <img :src="getImageUrl(curso.capa_url) || ''" alt="Imagem do curso" />
            </div>
            <div class="textos">
                <h2>{{ curso.titulo }}</h2>
                <p>{{ curso.descricao }}</p>
            </div>
            <div><img :src="infoSrc" class="icone"></div>
        </div>
        <div class="bottom">
            <div>{{ curso.aulas?.length ?? 0 }} Aulas</div>
            <div class="d-flex justify-content-between w-75">
                <button class="btn-matricula" @click="handleMatricula" v-if="matriculavel && curso.id">
                    {{ textoBotao }}
                </button>
                <div v-if="curso && curso.id">
                    <router-link :to="getCreateLessonRoute" class="btn btn-primary me-2">
                        Adicionar Aula
                    </router-link>
                    <router-link :to="getCreateHomeWorkRoute" class="btn btn-secondary">
                        Adicionar Leitura
                    </router-link>
                </div>
            </div>
            <div>{{ curso.leituras?.length ?? 0 }} Leituras</div>
        </div>
    </div>
</template>
<script>
import info from '@/assets/images/info.svg';
import { baseURL } from '@/services/api';
import cursoService from '@/services/cursoService';
export default {
    name: "CardCurso",
    props: {
        curso: {
            type: Object,
            required: true,
            default: () => ({
                id: null,
                nome: '',
                descricao: '',
                imagem_url: '',
                aulas: [],
                leituras: []
            })
        },
        matriculavel: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            user: {},
            infoSrc: info,
            matriculado: false
        }
    },
    computed: {
        textoBotao() {
            if (this.matriculado) {
                return 'Entrar no Curso'
            }
            return 'Fazer Matrícula'
        },
        canShowButtons() {
            return this.curso && this.curso.id;
        },
        getCreateLessonRoute() {
            return this.curso?.id ? {
                name: 'CreateLessons',
                params: { id: this.curso.id }
            } : { name: 'Home' };
        },
        getCreateHomeWorkRoute() {
            return this.curso?.id ? {
                name: 'CreateHomeWork',
                params: { id: this.curso.id }
            } : { name: 'Home' };
        }
    },
    emits: ['navigate'],
    mounted() {
        this.matriculado = false;
        const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
        const meus_cursos = JSON.parse(sessionStorage.getItem('meus_cursos') ?? '[]');
        this.user = user;
        const matriculados = meus_cursos.map((curso) => curso.id);
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
            if (!name) {
                return undefined
            }
            if (name.startsWith('http')) {
                return name;
            }
            return baseURL + '/' + name;
        },
        async handleMatricula() {
            if (this.matriculado) {
                const url = `/curso/${this.curso.id}/acompanhar`;
                this.$emit('navigate', url)
                return;
            }
            if (this.getUser()) {
                try {
                    await cursoService.matricular(this.curso.id);
                    const meus_cursos = JSON.parse(sessionStorage.getItem('meus_cursos') ?? []);
                    meus_cursos.push(this.curso)
                    sessionStorage.setItem('meus_cursos', JSON.stringify(meus_cursos));
                    this.matriculado = true;
                    this.$toast({
                        message: "Matrícula realizada com sucesso",
                        title: "Sucesso",
                        type: 'success'
                    })
                } catch (error) {
                    console.error("Erro ao matricular: ", error)
                    this.$toast({
                        message: "Não foi possível realizar matrícula: " + error.message,
                        title: "Erro ao matricular usuário",
                        type: 'error'
                    })
                }
            } else {
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
    flex: 1;
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

@media (max-width: 768px) {
    .top {
        flex-direction: column;
        align-items: center;
    }

    .top img {
        width: 100%;
        height: auto;
        max-width: 300px;
    }

    .textos {
        text-align: center;
        align-items: center;
    }

    .bottom {
        flex-direction: column;
        gap: 1em;
    }

    .card_curso {
        padding: 1em;
    }
}

@media (max-width: 480px) {
    .btn-matricula {
        padding: 0.5em 1.5em;
        width: 100%;
    }

    .card_curso {
        padding: 0.8em;
    }
}
</style>
