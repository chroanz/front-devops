<template>
    <div class="create-course container d-flex justify-content-center align-items-center p-5">
      <div class="w-100">
        <div class="card-body">
          <h5 class="card-title">Criar Aula</h5>
          <FormCreateLesson />
        </div>
      </div>
    </div>
    <Toast
      v-if="showToast"
      message="{{  }}"
      title="{{  }}"
      background="#28a745"
      color="#ffffff"
      @close="showToast = false"
  />
  </template>
  
  <script>
  import FormCreateLesson from '@/components/organisms/FormCreateLessons.vue';
  import axios from 'axios';
  import  Toast from '@/components/organisms/Toast.vue';

  export default {
    name: 'CreateLessons',
    components: {
        FormCreateLesson,
        Toast
    },
    data() {
      return {
        showToast: false,
      };
    },
    methods: {
      async createLesson(lessonData) {
        const formData = new FormData();
        formData.append('title', lessonData.title);
        formData.append('description', lessonData.description);
        formData.append('file', lessonData.file);

        try {
          const response = await axios.post('/api/lessons/create', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          if (response.data.success) {
            this.showToast = true;
            this.$toast.success(response.data.message || 'Aula criada com sucesso!');
          } else {
            this.showToast = true;
            this.$toast.error(response.data.message || 'Erro ao criar a aula!');
          }
        } catch (error) {
          this.showToast = true;
          this.$toast.error('Erro ao criar a aula!');
        }
      },
    },
  };
  </script>
  
  <style scoped>
.container {
  max-width: 100%;
  height: 100%;
}
  </style>
