<template>
  <div class="progress-bar">
    <div class="progress-bar-fill" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0 && value <= 100;
      }
    }
  }
};
</script>

<style scoped>
.progress-bar {
  width: 80%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  padding: 0;
}

.progress-bar-fill {
  height: 100%;
  background-color: #4caf50;
  border-radius: 10px 0 0 10px;
  transition: width 0.3s ease;
}
</style>
