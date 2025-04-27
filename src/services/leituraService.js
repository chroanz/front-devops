import api from "./api";

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
};

export default leituraService;
