<template>
    <div class="container p-5">
        <form @submit.prevent="submitForm" class="d-flex flex-column ">
            <div class="mb-3">
                <label for="homeWorkName" class="form-label">Titulo</label>
                <input type="text" class="form-control" id="homeWorkName" v-model="homeWork.titulo" required placeholder="Nome da Leitura">
            </div>
            <div class="flex-row d-flex justify-content-between">
                <div class="w-100">
                    <label for="homeWorkConteudo" class="form-label">Conteúdo</label>
                    <textarea class="form-control" style="height: 200px;" id="homeWorkConteudo" v-model="homeWork.conteudo" required placeholder="Conteúdo da leitura"></textarea>
                </div>
            </div>
            <div class="d-flex align-items-end mt-3">
                <button type="submit" class="btn btn-primary m-1">Salvar Alterações</button>
                <a href="" class="btn btn-secondary m-1" @click="cancel">Cancelar</a>
            </div>
        </form>
    </div>
    <Toast v-if="showToast" :message="toastMessage" :title="toastTitle" :background="toastBg" color="#ffffff" @close="showToast = false" />
</template>

<script>
import Toast from '@/components/organisms/Toast.vue';
import leituraService from '@/services/leituraService';

export default {
    name: 'FormEditHomeWork',
    components: { Toast },
    data() {
        return {
            homeWork: {
                titulo: '',
                conteudo: '',
            },
            showToast: false,
            toastMessage: '',
            toastTitle: '',
            toastBg: '#28a745',
        };
    },
    mounted() {
        this.fetchLeitura();
    },
    methods: {
        getLeituraIdFromUrl() {
            const urlSegments = window.location.pathname.split('/');
            return urlSegments.at(-1);
        },
        async fetchLeitura() {
            const id = this.getLeituraIdFromUrl();
            try {
                const leitura = await leituraService.get(id);
                this.homeWork = {
                    titulo: leitura.titulo,
                    conteudo: leitura.conteudo,
                };
            } catch (error) {
                this.showToast = true;
                this.toastTitle = 'Erro';
                this.toastMessage = 'Erro ao carregar dados da leitura';
                this.toastBg = '#dc3545';
            }
        },
        async submitForm() {
            const id = this.getLeituraIdFromUrl();
            try {
                const response = await leituraService.atualizar(id, this.homeWork);
                this.showToast = true;
                if (response.curso_id != null) {
                    this.toastTitle = 'Sucesso';
                    this.toastMessage = 'Leitura atualizada com sucesso';
                    this.toastBg = '#28a745';
                    this.$router.push(`/curso/${response.course_id}`);
                } else {
                    this.toastTitle = 'Erro';
                    this.toastMessage = 'Erro ao atualizar a leitura';
                    this.toastBg = '#dc3545';
                }
            } catch (error) {
                this.showToast = true;
                this.toastTitle = 'Erro';
                this.toastMessage = 'Ocorreu um erro inesperado ao atualizar a leitura';
                this.toastBg = '#dc3545';
            }
        }, cancel() {
            this.$router.push(`/cursos/`);
        }
    }
}
</script>
<style scoped>
.container {
  max-width: 75%;
  height: 100%;
}
</style>