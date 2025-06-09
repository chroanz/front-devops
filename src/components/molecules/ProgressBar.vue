<template>
  <div class="progress-bar">
    <div class="progress-bar-fill" :style="progressBarStyle"></div>
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
      default: getComputedStyle(document.documentElement)?.getPropertyValue('--color-action')?.trim() ?? '#4caf50'
    }
  },
  computed: {
    progressBarStyle() {
      return {
        width: this.progress + '%',
        backgroundColor: this.color,
        borderRadius: this.progress === 100 ? '6px' : '10px 0 0 10px'
      }
    }
  }
};
</script>

<style scoped>
.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #555555;
  border-radius: 10px;
  overflow: hidden;
  padding: 4px;
}

.progress-bar-fill {
  height: 100%;
  transition: all 0.3s ease;
  
}
</style>
