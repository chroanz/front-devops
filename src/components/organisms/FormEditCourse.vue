<template>
    <div class="container">
        <form @submit.prevent="submitForm" class="d-flex flex-column ">
            <div class="mb-3">
                <label for="courseName" class="form-label">Nome do Curso</label>
                <input type="text" class="form-control" id="courseName" v-model="course.titulo" required>
            </div>
            <div class="mb-3">
                <label for="courseDescription" class="form-label">Descrição</label>
                <textarea class="form-control" id="courseDescription" v-model="course.descricao" required></textarea>
            </div>
            <div class="col-12 mb-3 flex-row d-flex justify-content-between">
                <div class="col-sm-6 w-50">
                    <label for="img" class="form-label">Imagem</label>
                    <input type="file" class="form-control" id="img" @change="handleImageUpload">
                </div>
                <div class="col-sm-6 w-50 mx-1">
                    <label for="type" class="form-label">Tipo do curso</label>
                    <select name="type" v-model="course.categoria" class="form-control" id="type" required>
                        <option value="Deficiência Visual">Deficiência visual</option>
                        <option value="Deficiência Auditiva">Deficiência auditiva</option>
                        <option value="SurdoCegueira">Surdocegueira</option>
                    </select>
                </div>
            </div>
            <div class="d-flex align-items-end">
                <button type="submit" class="btn btn-primary m-1">Salvar Alterações</button>
                <a href="/" class="btn btn-secondary m-1">Cancelar</a>
            </div>
        </form>
    </div>
    <Toast v-if="showToast" :message="toastMessage" :title="toastTitle" :background="toastBg" color="#ffffff" @close="showToast = false" />
</template>

<script>
import Toast from '@/components/organisms/Toast.vue';
import cursoService from '@/services/cursoService';

export default {
    name: 'FormEditCourse',
    components: { Toast },
    data() {
        return {
            course: {
                titulo: '',
                categoria: '',
                descricao: '',
                capa: null,
            },
            showToast: false,
            toastMessage: '',
            toastTitle: '',
            toastBg: '#28a745',
        };
    },
    mounted() {
        this.fetchCurso();
    },
    methods: {
        getCursoIdFromUrl() {
            const urlSegments = window.location.pathname.split('/');
            return urlSegments.at(-1);
        },
        handleImageUpload(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                this.course.capa = reader.result;
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        },
        async fetchCurso() {
            const id = this.getCursoIdFromUrl();
            try {
                const curso = await cursoService.get(id);
                this.course = {
                    titulo: curso.titulo,
                    categoria: curso.categoria,
                    descricao: curso.descricao,
                    capa: curso.capa_url || null,
                };
            } catch (error) {
                this.showToast = true;
                this.toastTitle = 'Erro';
                this.toastMessage = 'Erro ao carregar dados do curso';
                this.toastBg = '#dc3545';
            }
        },
        async submitForm() {
            const id = this.getCursoIdFromUrl();
            try {
                const response = await cursoService.atualizar(id, this.course);
                this.showToast = true;
                if (response.success) {
                    this.toastTitle = 'Sucesso';
                    this.toastMessage = 'Curso atualizado com sucesso';
                    this.toastBg = '#28a745';
                    this.$router.push('/courses');
                } else {
                    this.toastTitle = 'Erro';
                    this.toastMessage = 'Erro ao atualizar o curso';
                    this.toastBg = '#dc3545';
                }
            } catch (error) {
                this.showToast = true;
                this.toastTitle = 'Erro';
                this.toastMessage = 'Ocorreu um erro inesperado ao atualizar o curso';
                this.toastBg = '#dc3545';
            }
        },
    }
}
</script>