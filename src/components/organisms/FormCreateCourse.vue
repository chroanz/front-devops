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
                    <label for="courseImage" class="form-label">Imagem</label>
                    <input type="file" class="form-control" id="courseImage" @change="handleImageUpload">
                </div>
                <div class="col-sm-6 w-50 mx-1">
                    <label for="type" class="form-label">Tipo do curso</label>
                    <select name="type" v-model="course.categoria" class="form-control" id="type" required
                        placeholder="Selecione o tipo de curso">
                        <option value="Deficiência Visual">Deficiência visual</option>
                        <option value="Deficiência Auditiva">Deficiência auditiva</option>
                        <option value="SurdoCegueira">Surdocegueira</option>
                    </select>
                </div>
            </div>
            <div class="d-flex align-items-end">
                <button type="submit" class="btn btn-primary m-1">Criar Curso</button>
                <a href="/" class="btn btn-secondary m-1">Cancelar</a>
            </div>
        </form>
    </div>
</template>

<script>
import cursoService from '@/services/cursoService';

export default {
    name: 'FormCreateCourse',
    data() {
        return {
            course: {
                titulo: '',
                categoria: '',
                descricao: '',
                capa: null,
            },
        };
    },
    methods: {
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
        async submitForm() {
            console.log('Dados do curso:', this.course);
            // Aqui você pode adicionar a lógica para enviar os dados do curso para o backend
            const response = await cursoService.createCurso(this.course)
            if (!response.success) {
                this.$toast({
                    message: "Não foi possível criar curso: " + response.message,
                    title: "Erro ao criar curso",
                    type: 'error'
                })
            } else {
                this.$toast({
                    message: 'Curso criado com sucesso',
                    title: 'Curso criado com sucesso',
                    type: 'success'
                    })
                this.$router.push('/courses')
            }
        },
    },
} 
</script>