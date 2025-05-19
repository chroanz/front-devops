import { api } from "@/services/api";

const cursoService = {
  async listarCursos(searchTerm) {
    try {
      let url = "cursos";
      if (searchTerm) {
        url += `/search/${searchTerm}`;
      }
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
  async get(id) {
    const response = await api.get("cursos/show/" + id);
    return response.data;
  },
  async meusCursos() {
    const response = await api.get("cursos/meus_cursos");
    return response.data;
  },
  async createCurso(data) {
    try {
      const response = await api.post("cursos/create", data);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: error.response.data.message };
    }
  },
  async matricular(id) {
    try {
      const response = await api.post(`cursos/subscribe/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: error.response.data.message };
    }
  },
};

export default cursoService;
