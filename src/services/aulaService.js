import { api } from "./api";

const aulaService = {
  async listarAulas(cursoId) {
    const response = await api.get("aulas?curso_id=" + cursoId );
    return response.data;
  }, async criar(aula) {
    const response = await api.post("aulas/create", aula);
    return response.data;
  },  async atualizar(id, data) {
    const response = await api.put(`aulas/update/${id}`, data);
    return response.data;
  },
  async get(id) {
    const response = await api.get("aulas/show/" + id);
    return response.data;
  },
  async marcarVisto(id) {
    const response = await api.patch(`aulas/${id}/visto`);
    return response.data;
  },
  async deletar(id) {
    const response = await api.delete(`aulas/delete/${id}`);
    return response.data;
  }
};

export default aulaService;
