import { api } from "./api";

const leituraService = {
  async listarLeituras(idCurso) {
    const response = await api.get("leituras?curso_id=" + idCurso)
    return response.data;
  },
  async get(id) {
    const response = await api.get("leituras/" + id);
    return response.data;
  },
  async marcarVisto(id) {
    const response = await api.patch(`leituras/${id}/visto`);
    return response.data;
  },
  async deletar(id) {
    const response = await api.delete(`leituras/${id}`);
    return response.data;
  },
  async atualizar(id, data) {
    const response = await api.put(`leituras/${id}`, data);
    return response.data;
  }
};

export default leituraService;
