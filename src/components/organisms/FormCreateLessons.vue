<template>
    <div class="container">
        <form @submit.prevent="submitForm" class="d-flex flex-column ">
            <div class="mb-3">
                <label for="aulaName" class="form-label">Titulo</label>
                <input type="text" class="form-control" id="aulaName" v-model="aula.titulo" required placeholder="Nome da aula">
            </div>
            <div class="mb-3">
                <label for="lessonVideo" class="form-label">Video</label>
                <input type="url" class="form-control" id="lessonVideo" v-model="aula.video" required placeholder="URL do video no youtube">
            </div>
            <div class="col-12 mb-3 flex-row d-flex justify-content-between">
                <div class="col-sm-6 w-50">
                    <label for="lessonDescription" class="form-label">Sequencia</label>
                    <input type="text" class="form-control" id="aulaName" v-model="aula.sequencia" required placeholder="Numero da sequencia">
                </div>
                <div class="col-sm-6 w-50 mx-1">
                    <label for="lessonDuration" class="form-label">Duração</label>
                    <input type="number" class="form-control" id="lessonDuration" name="lessonDuration" v-model="aula.duracaoMinutos" required placeholder="Duração em minutos">
                </div>
            </div>
            <div class="d-flex align-items-end">
                <button type="submit" class="btn btn-primary m-1">Criar Curso</button>
                <a href="" class="btn btn-secondary m-1">Cancelar</a>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormCreateLesson',
    data() {
        return {
            aula: {
                titulo: '',
                sequencia: '',
                duracaoMinutos: '',
                video: null,
            },
        };
    },
    methods: {
        submitForm() {
            console.log('Dados do curso:', this.aula);
            // Aqui você pode adicionar a lógica para enviar os dados do curso para o backend
        },
    },
} 
</script>