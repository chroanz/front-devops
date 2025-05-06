<template>
    <div class="container">
        <form @submit.prevent="submitForm" class="d-flex flex-column ">
            <div class="mb-3">
                <label for="titulo" class="form-label">Nome do Curso</label>
                <input type="text" class="form-control" id="titulo" name="titulo" v-model="course.name" required>
            </div>
            <div class="mb-3">
                <label for="descricao" class="form-label">Descrição</label>
                <textarea class="form-control" id="descricao" name="titulo" v-model="course.description"
                    required></textarea>
            </div>
            <div class="col-12 mb-3 flex-row d-flex justify-content-between">
                <div class="col-sm-6 w-50">
                    <label for="img" class="form-label">Imagem</label>
                    <input type="file" class="form-control" id="img" @change="handleImageUpload">
                </div>
                <div class="col-sm-6 w-50 mx-1">
                    <label for="categoria" class="form-label">Tipo do curso</label>
                    <select name="categoria" v-model="course.type" class="form-control" id="type" required
                        placeholder="Selecione o tipo de curso">
                        <option value="1">Deficiência visual</option>
                        <option value="2">Deficiência auditiva</option>
                        <option value="3">Surdocegueira</option>
                    </select>
                </div>
            </div>
            <div class="d-flex align-items-end">
                <button type="submit" class="btn btn-primary m-1">Criar Curso</button>
                <a href="/" class="btn btn-secondary m-1">Cancelar</a>
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
    name: 'FormCreateCourse',
    components: {
        Toast,
    },
    data() {
        return {
            course: {
                name: '',
                type: '',
                description: '',
                image: null,
            },
            showToast: false,
        };
    },
    methods: {
        handleImageUpload(event) {
            this.course.image = event.target.files[0];
        },
        async submitForm() {
            const formData = new FormData();
            formData.append('titulo', this.course.name);
            formData.append('categoria', this.course.type);
            formData.append('descricao', this.course.description);
            formData.append('image', this.course.image);

            try {
                const response = await this.createCourse(formData);
                this.showToast = true;

                if (response.data.status) {
                    this.$toast({
                        title: 'Sucesso',
                        message: 'Curso criado com sucesso',
                        background: '#28a745' // Green background for success
                    });
                    this.$router.push(`/curso/${response.data.id}`);
                } else {
                    this.$toast({
                        title: 'Erro',
                        message: 'Erro ao criar o curso',
                        background: '#dc3545' // Red background for error
                    });
                }
            } catch (error) {
                console.error('Erro ao criar o curso:', error);
                this.$toast({
                    title: 'Erro',
                    message: 'Ocorreu um erro inesperado ao criar o curso',
                    background: '#dc3545' // Red background for error
                });
                this.showToast = true;
            }
        },
        async createCourse(courseData) {
            const response = await axios.post('http://127.0.0.1:8000/api/cursos/create', courseData);
            return response;
        },
    }
}
</script>