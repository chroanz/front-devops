<template>
    <div 
        class="toast show" 
        role="alert" 
        aria-live="assertive" 
        aria-atomic="true"
        :style="toastStyle"
    >
        <div class="toast-header" :style="headerStyle">
            <strong class="me-auto">{{ title }}</strong>
            <button 
                type="button" 
                class="btn-close" 
                @click="closeToast" 
                aria-label="Close"
            ></button>
        </div>
        <div class="toast-body" :style="bodyStyle">
            {{ message }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToastComponent',
    data() {
        return {
            timer: null
        }
    },
    computed: {
        headerStyle() {
            return {
                backgroundColor: this.background,
                color: this.color
            }
        },
        bodyStyle() {
            return {
                backgroundColor: this.background,
                color: this.color
            }
        },
        toastStyle() {
            return {
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                minWidth: '250px',
                zIndex: 1000
            }
        }
    },
    methods: {
        closeToast() {
            this.$emit('close');
        },
        startTimer() {
            if (this.timeout > 0) {
                this.timer = setTimeout(() => {
                    this.closeToast();
                }, this.timeout);
            }
        }
    },
    mounted() {
        this.startTimer();
    },
    beforeUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    },
    props: {
        message: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: getComputedStyle(document.documentElement)?.getPropertyValue('--color-secondary')?.trim() ?? '#000000'
        },
        background: {
            type: String,
            default: getComputedStyle(document.documentElement)?.getPropertyValue('--color-primary')?.trim() ?? '#ffffff'
        },
        timeout: {
            type: Number,
            default: 5000
        }
    }
}
</script>

<style scoped>
.toast {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-close {
    filter: invert(1);
}
</style>