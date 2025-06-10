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
                <div v-if="user?.isAdmin && curso && curso.id" style="display: inline-block; margin-left: 10px; position: relative;"
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
                            <button class="dropdown-item text-primary" @click="navegarParaEditarCurso">
                                Editar
                            </button>
                        </li>
                        <li class="dropdown-item-delete">
                            <button class="dropdown-item" @click="handleDeleteCurso"
                                style="background:none;border:none;width:100%;text-align:left;">
                                <span class="text-danger" style="display: flex; align-items: center;">
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
import info from "@/assets/images/info.svg";
import { baseURL } from "@/services/api";
import cursoService from "@/services/cursoService";

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
    emits: ['navigate', 'cursoDeletado'],
    data() {
        return {
            user: JSON.parse(sessionStorage.getItem('user') || '{}'),
            infoSrc: info,
            matriculado: false,
            dropdownOpen: false
        }
    },
    computed: {
        textoBotao() {
            return this.matriculado ? 'Entrar no Curso' : 'Fazer Matrícula';
        },
        getCreateLessonRoute() {
            return this.curso.id
                ? { name: 'CreateLessons', params: { id: this.curso.id } }
                : { name: 'Home' };
        },
        getCreateHomeWorkRoute() {
            return this.curso.id
                ? { name: 'CreateHomeWork', params: { id: this.curso.id } }
                : { name: 'Home' };
        }
    },
    mounted() {
        const user = JSON.parse(sessionStorage.getItem('user') || '{}');
        const meus_cursos = JSON.parse(sessionStorage.getItem('meus_cursos') || '[]');
        this.user = user;
        this.matriculado = meus_cursos.map(c => c.id).includes(this.curso.id);
    },
    methods: {
        getUser() {
            return this.user?.user?.id ? this.user.user : undefined;
        },
        getImageUrl(name) {
            if (!name) return undefined;
            return name.startsWith('http') ? name : `${baseURL}/${name}`;
        },
        async handleMatricula() {
            if (this.matriculado) {
                this.$emit('navigate', `/curso/${this.curso.id}/acompanhar`);
                return;
            }
            if (this.getUser()) {
                try {
                    await cursoService.matricular(this.curso.id);
                    const meus = JSON.parse(sessionStorage.getItem('meus_cursos') || '[]');
                    meus.push(this.curso);
                    sessionStorage.setItem('meus_cursos', JSON.stringify(meus));
                    this.matriculado = true;
                    this.$toast({ message: "Matrícula realizada com sucesso", title: "Sucesso", type: 'success' });
                } catch (error) {
                    console.error("Erro ao matricular: ", error);
                    this.$toast({ message: "Não foi possível realizar matrícula: " + error.message, title: "Erro", type: 'error' });
                }
            } else {
                this.$emit('navigate', '/login');
            }
        },
        async handleDeleteCurso() {
            if (!this.curso.id) return;
            try {
                await cursoService.deletar(this.curso.id);
                this.$toast({ message: "Curso deletado com sucesso", title: "Sucesso", type: 'success' });
                this.$emit('cursoDeletado', this.curso.id);
                this.$emit('navigate', '/courses');
            } catch (error) {
                console.error("Erro ao deletar curso: ", error);
                this.$toast({ message: "Não foi possível deletar o curso: " + error.message, title: "Erro ao deletar curso", type: 'error' });
            }
        },
        navegarParaEditarCurso() {
            if (!this.curso.id) return;
            this.$router.push({ name: 'EditCourse', params: { id: this.curso.id } });
            this.dropdownOpen = false;
        },
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
