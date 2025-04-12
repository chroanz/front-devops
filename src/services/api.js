import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8001/api', // Aqui varia para alguns, pessoal. No meu roda nessa porta
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
