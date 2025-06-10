<template>
    <div class="container d-flex align-items-center justify-content-center p-5">
        <form @submit.prevent="submitForm" class="d-flex w-75 flex-column">
            <div class="mb-3">
                <label for="homeWorkName" class="form-label">Título</label>
                <input
                    type="text"
                    id="homeWorkName"
                    class="form-control w-100"
                    v-model="homeWork.titulo"
                    required
                    placeholder="Nome da Leitura"
                />
            </div>
            <div class="mb-3">
                <label for="homeWorkSequencia" class="form-label">Sequência</label>
                <input
                    type="number"
                    id="homeWorkSequencia"
                    class="form-control w-100"
                    v-model="homeWork.sequencia"
                    required
                    placeholder="Número da sequência"
                />
            </div>
            <div class="mb-3">
                <label for="homeWorkConteudo" class="form-label">Conteúdo</label>
                <textarea
                    id="homeWorkConteudo"
                    class="form-control w-100"
                    v-model="homeWork.conteudo"
                    required
                    placeholder="Conteúdo da leitura"
                ></textarea>
            </div>
            <div class="d-flex align-items-end">
                <button type="submit" class="btn btn-primary m-1">Criar Leitura</button>
                <button type="button" class="btn btn-secondary m-1" @click="cancel">
                    Cancelar
                </button>
            </div>
        </form>
    </div>

    <Toast
        v-if="showToast"
        :title="toastTitle"
        :message="toastMessage"
        :background="toastBg"
        color="#ffffff"
        @close="showToast = false"
    />
</template>

<script>
import Toast from '@/components/organisms/Toast.vue';
import leituraService from '@/services/leituraService';

export default {
  name: 'FormCreateHomeWork',
  components: { Toast },
  data() {
    return {
      homeWork: {
        titulo: '',
        sequencia: '',
        conteudo: '',
      },
      showToast: false,
      toastTitle: '',
      toastMessage: '',
      toastBg: '#28a745',
    };
  },
  methods: {
    getCursoIdFromUrl() {
      const segments = window.location.pathname.split('/');
      return segments.at(-1);
    },
    async submitForm() {
      const cursoId = this.getCursoIdFromUrl();
      const payload = {
        titulo: this.homeWork.titulo,
        sequencia: this.homeWork.sequencia,
        conteudo: this.homeWork.conteudo,
        curso_id: cursoId
      };
      try {
        const response = await leituraService.criar(payload);
        if (response.id != null) {
          this.toastTitle = 'Sucesso';
          this.toastMessage = 'Leitura criada com sucesso';
          this.toastBg = '#28a745';
          this.showToast = true;
          this.$router.push(`/curso/${cursoId}`);
        } else {
          this.toastTitle = 'Erro';
          this.toastMessage = response.message || 'Falha ao criar leitura';
          this.toastBg = '#dc3545';
          this.showToast = true;
        }
      } catch (error) {
        this.toastTitle = 'Erro';
        this.toastMessage =
          'Ocorreu um erro inesperado: ' + (error.message || '');
        this.toastBg = '#dc3545';
        this.showToast = true;
      }
    },
    cancel() {
      const cursoId = this.getCursoIdFromUrl();
      this.$router.push(`/curso/${cursoId}`);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 100%;
  height: 100%;
}
</style>