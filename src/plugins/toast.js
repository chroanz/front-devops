import Toast from '@/components/organisms/Toast.vue'
import { createApp } from 'vue'

const toast = {
    install(app) {
        const toastContainer = document.createElement('div')
        toastContainer.id = 'toast-container'
        document.body.appendChild(toastContainer)

        const showToast = ({ message, title, color = '#ffffff', type = 'success', timeout = 5000 }) => {
            const toastInstance = createApp(Toast, {
                message,
                title,
                background: getColor(type),
                color,
                timeout,
                onClose: () => {
                    if (mountElement.parentNode == toastContainer) {
                        toastContainer.removeChild(mountElement)
                    }
                }
            })

            const mountElement = document.createElement('div')
            toastContainer.appendChild(mountElement)
            toastInstance.mount(mountElement)
        }
        function getColor(type) {
            switch (type) {
                case 'success':
                    return '#28a745'
                case 'error':
                    return '#dc3545'
                case 'warning':
                    return '#ffc107'
                default:
                    return (
                      getComputedStyle(document.documentElement)
                        ?.getPropertyValue("--color-secondary")
                        ?.trim() ?? "#ffffff"
                    );
            }
        }

        app.config.globalProperties.$toast = showToast
        app.provide('toast', showToast)
    }
}

export default toast