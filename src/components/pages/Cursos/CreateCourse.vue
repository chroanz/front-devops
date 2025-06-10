<template class="h-100">
  <div class="create-course h-100 container d-flex justify-content-center align-items-center p-5"
    style="min-height: 100%;">
    <div class="w-100">
      <div class="card-body">
        <h5 class="card-title">Criar Novo Curso</h5>
        <FormCreateCourse @submit="createCourse" />
      </div>
    </div>
  </div>


</template>

<script>
import FormCreateCourse from '../../organisms/FormCreateCourse.vue';

export default {
  name: 'CreateCourse',
  components: {
    FormCreateCourse,
  },
};
</script>

<style scoped>
.alert-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.alert-content {
  background: white;
  padding: 20px 30px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-in-out;
}

.alert-content h4 {
  margin: 0 0 10px;
  font-size: 18px;
  color: #333;
}

.alert-content p {
  margin: 0 0 20px;
  font-size: 16px;
  color: #555;
}

.alert-content button {
  padding: 8px 16px;
  background-color: #B288C0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.alert-content button:hover {
  background-color: #9a6fa8;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>