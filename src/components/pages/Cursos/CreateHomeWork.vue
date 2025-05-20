<template>
  <div class="create-course container d-flex justify-content-center align-items-center pb-5">
    <div class="card bg-purple text-white w-50">
      <div class="card-body">
        <h5 class="card-title">Criar Leitura</h5>
        <FormCreateHomeWork @submit="createHomeWork" />
      </div>
    </div>
  </div>

  <Toast v-if="showToast" message="{{  }}" title="{{  }}" background="#28a745" color="#ffffff"
    @close="showToast = false" />
</template>

<script>
import axios from 'axios';
import Toast from '@/components/organisms/Toast.vue';
import FormCreateHomeWork from '@/components/organisms/FormCreateHomeWork.vue';

export default {
  name: 'CreateHomeWork',
  components: {
    FormCreateHomeWork,
    Toast,
  },
  data() {
    return {
      showToast: false,
    };
  },
  methods: {
    getUuidFromUrl() {
      const urlSegments = window.location.pathname.split('/');
      return urlSegments.find(segment => /^[0-9a-fA-F-]{36}$/.test(segment)) || null;
    },
    async createHomeWork(homeWorkData) {
      const formData = new FormData();
      formData.append('title', homeWorkData.title);
      formData.append('description', homeWorkData.description);
      formData.append('file', homeWorkData.file);
      formData.append('curso_id', this.getUuidFromUrl());
      try {
        const response = await axios.post('http://localhost:8000/api/leituras', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      if (response.data.success) {
        this.showToast = true;
        this.$toast({
          title: 'Sucesso',
          message: 'Leitura criada com sucesso',
          background: '#28a745'
        });
      } else {
        this.showToast = true;

        this.$toast({
          title: 'Erro',
          message: 'Erro ao criar a leitura',
          background: '#dc3545'
        });
      }
    } catch(error) {
      this.showToast = true;

      this.$toast({
        title: 'Erro',
        message: 'Ocorreu um erro inesperado ao criar a leitura',
        background: '#dc3545'
      });
    }
  },
},
};
</script>

<style scoped>
.bg-purple {
  background-color: #B288C0 !important;
}
</style>