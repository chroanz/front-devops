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
            <div class="d-flex justify-content-between w-75 align-items-center">
                <button class="btn-matricula" @click="handleMatricula" v-if="matriculavel && curso.id">
                    {{ textoBotao }}
                </button>
                <div v-if="curso && curso.id" style="display: inline-block; margin-left: 10px; position: relative;"
                    @mouseenter="dropdownOpen = true" @mouseleave="dropdownOpen = false">
                    <button class="btn btn-secondary" type="button" style="position: relative; z-index: 2;"
                        tabindex="-1">
                        Ações
                    </button>
                    <ul v-show="dropdownOpen" class="dropdown-menu show"
                        style="display: block; position: absolute; z-index: 10;">
                        <li class="dropdown-item-hover">
                            <router-link :to="getCreateLessonRoute" class="dropdown-item" @click="dropdownOpen = false">
                                Adicionar Aula
                            </router-link>
                        </li>
                        <li class="dropdown-item-hover">
                            <router-link :to="getCreateHomeWorkRoute" class="dropdown-item"
                                @click="dropdownOpen = false">
                                Adicionar Leitura
                            </router-link>
                        </li>
                        <li class="dropdown-item-hover">
                            <button class="dropdown-item" @click="navegarParaEditarCurso">
                                Editar
                            </button>
                        </li>
                        <li class="dropdown-item-delete">
                            <button class="dropdown-item" @click="handleDeleteCurso"
                                style="background:none;border:none;width:100%;text-align:left;">
                                <span style="display: flex; align-items: center;">
                                    Deletar Curso
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="d-flex justify-content-between w-75 align-items-center">
                <button class="btn-matricula" @click="handleMatricula" v-if="matriculavel && curso.id">
                    {{ textoBotao }}
                </button>
                <div v-if="curso && curso.id" style="display: inline-block; margin-left: 10px; position: relative;"
                    @mouseenter="dropdownOpen = true" @mouseleave="dropdownOpen = false">
                    <button class="btn btn-secondary" type="button" style="position: relative; z-index: 2;"
                        tabindex="-1">
                        Ações
                    </button>
                    <ul v-show="dropdownOpen" class="dropdown-menu show"
                        style="display: block; position: absolute; z-index: 10;">
                        <li class="dropdown-item-hover">
                            <router-link :to="getCreateLessonRoute" class="dropdown-item" @click="dropdownOpen = false">
                                Adicionar Aula
                            </router-link>
                        </li>
                        <li class="dropdown-item-hover">
                            <router-link :to="getCreateHomeWorkRoute" class="dropdown-item"
                                @click="dropdownOpen = false">
                                Adicionar Leitura
                            </router-link>
                        </li>
                        <li class="dropdown-item-hover">
                            <button class="dropdown-item" @click="navegarParaEditarCurso">
                                Editar
                            </button>
                        </li>
                        <li class="dropdown-item-delete">
                            <button class="dropdown-item" @click="handleDeleteCurso"
                                style="background:none;border:none;width:100%;text-align:left;">
                                <span style="display: flex; align-items: center;">
                                    Deletar Curso
                                </span>
                            </button>
                        </li>
                    </ul>
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
            matriculado: false,
            dropdownOpen: false
            matriculado: false,
            dropdownOpen: false
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
            return this.curso.id ? {
                name: 'CreateLessons',
                params: { cursoId: this.curso.id }
            } : { name: 'Home' };
        },
        getCreateHomeWorkRoute() {
            return this.curso.id ? {
                name: 'CreateHomeWork',
                params: { cursoId: this.curso.id }
            } : { name: 'Home' };
        }
    },
    emits: ['navigate', 'cursoDeletado'],
    emits: ['navigate', 'cursoDeletado'],
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
        },
        async handleDeleteCurso() {
            if (!this.curso?.id) return;
            try {
                await cursoService.deletar(this.curso.id);
                this.$toast({
                    message: "Curso deletado com sucesso",
                    title: "Sucesso",
                    type: 'success'
                });
                this.$emit('cursoDeletado', this.curso.id);
                this.$emit('navigate', '/courses');
            } catch (error) {
                console.error("Erro ao deletar curso: ", error);
                this.$toast({
                    message: "Não foi possível deletar o curso: " + error.message,
                    title: "Erro ao deletar curso",
                    type: 'error'
                });
            }
        },
        fecharDropdown() {
            setTimeout(() => {
                this.dropdownOpen = false;
            }, 150);
        },
        navegarParaEditarCurso() {
            if (this.curso?.id) {
                this.$router.push({ name: 'EditCourse', params: { id: this.curso.id } });
                this.dropdownOpen = false;
            }
        },
        async handleDeleteCurso() {
            if (!this.curso?.id) return;
            try {
                await cursoService.deletar(this.curso.id);
                this.$toast({
                    message: "Curso deletado com sucesso",
                    title: "Sucesso",
                    type: 'success'
                });
                this.$emit('cursoDeletado', this.curso.id);
                this.$emit('navigate', '/courses');
            } catch (error) {
                console.error("Erro ao deletar curso: ", error);
                this.$toast({
                    message: "Não foi possível deletar o curso: " + error.message,
                    title: "Erro ao deletar curso",
                    type: 'error'
                });
            }
        },
        fecharDropdown() {
            setTimeout(() => {
                this.dropdownOpen = false;
            }, 150);
        },
        navegarParaEditarCurso() {
            if (this.curso?.id) {
                this.$router.push({ name: 'EditCourse', params: { id: this.curso.id } });
                this.dropdownOpen = false;
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
