import axios from 'axios';

const baseURL = process.env.VUE_APP_API_BASE_URL ?? 'http://localhost:8001';
const api = axios.create({
  baseURL: `${baseURL}/api`, // Aqui varia para alguns, pessoal. No meu roda nessa porta
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
