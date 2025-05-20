<template class="h-100">
    <div class="container h-100 d-flex justify-content-center align-items-center p-5">
        <form @submit.prevent="submitForm" class="d-flex flex-column ">
            <div class="mb-3">
                <label for="titulo" class="form-label">Titulo</label>
                <input type="text" class="form-control" id="titulo" name="titulo" v-model="lesson.title" required
                    placeholder="Nome da aula">
            </div>
            <div class="mb-3">
                <label for="video" class="form-label">Video</label>
                <input type="url" class="form-control" id="video" name="video" v-model="lesson.video" required
                    placeholder="URL do video no youtube">
            </div>
            <div class="col-12 mb-3 flex-row d-flex justify-content-between">
                <div class="col-sm-6 w-50">
                    <label for="sequencia" class="form-label">Sequencia</label>
                    <input type="text" class="form-control" id="sequencia" name="sequencia" v-model="lesson.sequencia"
                        required placeholder="Numero da sequencia">
                </div>
                <div class="col-sm-6 w-50 mx-1">
                    <label for="duracaoMinutos" class="form-label">Duração</label>
                    <input type="number" class="form-control" id="duracaoMinutos" name="duracaoMinutos"
                        v-model="lesson.duracaoMinutos" required placeholder="Duração em minutos">
                </div>
            </div>
            <div class="d-flex align-items-end">
                <button type="submit" class="btn btn-primary m-1">Salvar Alterações</button>
                <a href="" class="btn btn-secondary m-1">Cancelar</a>
            </div>
        </form>
    </div>

    <Toast v-if="showToast" :message="toastMessage" :title="toastTitle" :background="toastBg" color="#ffffff"
        @close="showToast = false" />
</template>

<script>
import axios from 'axios';
import Toast from '@/components/organisms/Toast.vue';
import aulaService from '@/services/aulaService';

export default {
    name: 'FormEditLesson',
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
            toastMessage: '',
            toastTitle: '',
            toastBg: '#28a745',
        };
    },
    mounted() {
        this.fetchLesson();
    },
    methods: {
        getLessonIdFromUrl() {
            const urlSegments = window.location.pathname.split('/');
            return urlSegments.at(-1);
        },
        async fetchLesson() {
            const id = this.getLessonIdFromUrl();
            try {
                const aula = await aulaService.get(id);
                const aulaData = aula;
                console.log(aulaData);
                this.lesson = {
                    title: aulaData.titulo,
                    video: aulaData.videoUrl,
                    sequencia: aulaData.sequencia,
                    duracaoMinutos: aulaData.duracaoMinutos,
                };
            } catch (error) {
                this.showToast = true;
                this.toastTitle = 'Erro';
                this.toastMessage = 'Erro ao carregar dados da aula';
                this.toastBg = '#dc3545';
            }
        },
        async submitForm() {
            const id = this.getLessonIdFromUrl();
            const formData = new FormData();
            formData.append('titulo', this.lesson.title);
            formData.append('videoUrl', this.lesson.video);
            formData.append('sequencia', this.lesson.sequencia);
            formData.append('duracaoMinutos', this.lesson.duracaoMinutos);

            try {
                const response = await axios.put(`http://127.0.0.1:8000/api/aulas/update/${id}`, formData);
                this.showToast = true;
                if (response.data.aula != null) {
                    this.toastTitle = 'Sucesso';
                    this.toastMessage = 'Aula atualizada com sucesso';
                    this.toastBg = '#28a745';
                    // Redirecionar ou atualizar a página se desejar
                } else {
                    this.toastTitle = 'Erro';
                    this.toastMessage = 'Erro ao atualizar a aula';
                    this.toastBg = '#dc3545';
                }
            } catch (error) {
                this.showToast = true;
                this.toastTitle = 'Erro';
                this.toastMessage = 'Ocorreu um erro inesperado ao atualizar a aula';
                this.toastBg = '#dc3545';
            }
        },
    }
}
</script>