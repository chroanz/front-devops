import { api } from "./api";

const cursoService = {
  async listarCursos() {
    try {
      const response = await api.get("cursos");
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
};

export default cursoService;
