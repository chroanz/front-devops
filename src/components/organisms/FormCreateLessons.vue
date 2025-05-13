<template>
    <div class="container">
        <form @submit.prevent="submitForm" class="d-flex flex-column ">
            <div class="mb-3">
                <label for="titulo" class="form-label">Titulo</label>
                <input type="text" class="form-control" id="titulo" name="titulo" v-model="lesson.title" required
                    placeholder="Nome da aula">
            </div>
            <div class="mb-3">
                <label for="duracaoMinutos" class="form-label">Video</label>
                <input type="url" class="form-control" id="duracaoMinutos" name="duracaoMinutos" v-model="lesson.video" required
                    placeholder="URL do video no youtube">
            </div>
            <div class="col-12 mb-3 flex-row d-flex justify-content-between">
                <div class="col-sm-6 w-50">
                    <label for="sequencia" class="form-label">Sequencia</label>
                    <input type="text" class="form-control" id="sequencia" name="sequencia" v-model="lesson.sequencia" required
                        placeholder="Numero da sequencia">
                </div>
                <div class="col-sm-6 w-50 mx-1">
                    <label for="duracaoMinutos" class="form-label">Duração</label>
                    <input type="number" class="form-control" id="duracaoMinutos" name="duracaoMinutos"
                        v-model="lesson.duracaoMinutos" required placeholder="Duração em minutos">
                </div>
            </div>
            <div class="d-flex align-items-end">
                <button type="submit" class="btn btn-primary m-1">Criar Curso</button>
                <a href="" class="btn btn-secondary m-1">Cancelar</a>
            </div>
        </form>
    </div>

    <Toast v-if="showToast" message="{{  }}" title="{{  }}" background="{{  }}" color="#ffffff"
        @close="showToast = false" />
</template>

<script>
import axios from 'axios';
import Toast from '@/components/organisms/Toast.vue';

export default {
    name: 'FormCreateLesson',
    components: {
        Toast,
    },
    data() {
        return {
            lesson: {
                title: '',
                video: '',
                sequencia: '',
                duracaoMinutos: '',
            },
            showToast: false,
        };
    },
    methods: {
        getUuidFromUrl() {
            const urlSegments = window.location.pathname.split('/');
            return urlSegments.at(-1);
        },
        async submitForm() {
            const formData = new FormData();
            formData.append('titulo', this.lesson.title);
            formData.append('videoUrl', this.lesson.video);
            formData.append('sequencia', this.lesson.sequencia);
            formData.append('duracaoMinutos', this.lesson.duracaoMinutos);
            formData.append('curso_id', this.getUuidFromUrl());

            try {
                const response = await this.createLesson(formData);
                this.showToast = true;
                console.log('Resposta do servidor:', response.data);
                if (response.data.aula != null) {
                    this.$toast({
                        title: 'Sucesso',
                        message: 'Aula criada com sucesso',
                        background: '#28a745'
                    });
                    this.$router.push(`/aulas/${response.data.aula.id}`);
                } else {
                    this.$toast({
                        title: 'Erro',
                        message: 'Erro ao criar a aula',
                        background: '#dc3545'
                    });
                }
            } catch (error) {
                console.error('Erro ao criar a aula:', error);
                this.$toast({
                    title: 'Erro',
                    message: 'Ocorreu um erro inesperado ao criar a aula',
                    background: '#dc3545'
                });
                this.showToast = true;
            }
        },
        async createLesson(lessonData) {
            const response = await axios.post('http://127.0.0.1:8000/api/aulas/create', lessonData);
            return response;
        },
    }
}
</script>