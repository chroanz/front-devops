<template>
  <div class="create-course container d-flex justify-content-center align-items-center pb-5">
    <div class="card bg-purple text-white w-50">
      <div class="card-body">
        <h5 class="card-title">Criar Leitura</h5>
        <FormCreateHomeWork />
      </div>
    </div>
  </div>
</template>

<script>
import FormCreateHomeWork from '@/components/organisms/FormCreateHomeWork.vue';
export default {
  name: 'CreateHomeWork',
  components: {
    FormCreateHomeWork,
  },

};
</script>

<style scoped>
.bg-purple {
  background-color: #B288C0 !important;
  /* Cor roxa do Bootstrap 5 */
}
</style>