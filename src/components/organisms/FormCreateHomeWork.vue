<template>
    <div class="container">
        <form @submit.prevent="submitForm" class="d-flex flex-column ">
            <div class="mb-3">
                <label for="homeWorkName" class="form-label">Titulo</label>
                <input type="text" class="form-control" id="homeWorkName" v-model="homeWork.titulo" required
                    placeholder="Nome do Leitura">
            </div>

            <div class="col-12 mb-3 flex-row d-flex justify-content-between">
                <div class="col-sm-6 w-50" style="max-width: 49%;">
                    <label for="homeWorkDescription" class="form-label">Sequencia</label>
                    <input type="text" class="form-control" id="homeWorkName" v-model="homeWork.sequencia" required
                        placeholder="Numero da sequencia">
                </div>
                <div class="col-sm-6 w-50" style="max-width: 49%;">
                    <label for="homeWorkVideo" class="form-label">Video</label>
                    <input type="file" class="form-control" id="homeWorkVideo" required
                        placeholder="Arquivo do leitura">
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
    name: 'FormCreatehomeWork',
    data() {
        return {
            homeWork: {
                titulo: '',
                sequencia: '',
                conteudo: '',
            },
        };
    },
    methods: {
        submitForm() {
            console.log('Dados do curso:', this.homeWork);
            // Aqui você pode adicionar a lógica para enviar os dados do curso para o backend
        },
    },
} 
</script>