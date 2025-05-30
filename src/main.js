import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import toast from './plugins/toast'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "bootstrap";

createApp(App)
  .use(router)
  .use(toast)
  .mount('#app');
