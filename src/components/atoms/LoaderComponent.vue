<template>
    <div class="loader-container" v-show="eventBus.loading">
        <div class="loader"></div>
    </div>
</template>

<script>
import eventBus from '@/services/eventBus';
export default {
    name: 'LoaderComponent',
    data() {
        return {
            eventBus
        }
    }
}
</script>

<style scoped>
.loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loader {
    width: 150px;
    height: 150px;
    border: 15px solid var(--color-secondary);
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>