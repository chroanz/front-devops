import axios from 'axios';
import eventBus from './eventBus';

const baseURL = process.env.VUE_APP_API_BASE_URL ?? 'http://localhost:8000';
const api = axios.create({
  baseURL: `${baseURL}/api`, // Aqui varia para alguns, pessoal. No meu roda nessa porta
});

let activeRequests = 0;

const toggleLoader = (show) => {
  eventBus.loading = show
}

api.interceptors.request.use(
  (config) => {
    activeRequests++;
    toggleLoader(true)
    const token = sessionStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    activeRequests--;
    if (activeRequests === 0) {
      toggleLoader(false)
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    activeRequests--;
    if (activeRequests === 0) {
      toggleLoader(false);
    }
    return response;
  },
  (error) => {
    activeRequests--;
    if (activeRequests === 0) {
      toggleLoader(false);
    }
    return Promise.reject(error);
  }
);

export { api, baseURL };