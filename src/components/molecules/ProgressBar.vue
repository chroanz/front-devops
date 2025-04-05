<template>
  <div class="progress-bar">
    <div class="progress-bar-fill" :style="{ width: progress + '%', 'background-color': color }"></div>
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
    },
    color: {
      type: String,
      required: false,
      default: getComputedStyle(document.documentElement)?.getPropertyValue('--color-verde')?.trim() ?? '#4caf50'
    }
  }
};
</script>

<style scoped>
.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  padding: 0;
}

.progress-bar-fill {
  height: 100%;
  border-radius: 10px 0 0 10px;
  transition: width 0.3s ease;
}
</style>
