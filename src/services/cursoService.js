
import api from './api';

const cursoService = {
    async listarCursos() { 
        const response = await api.get('cursos');
        return response.data;
    },
    async get(id) {
        const response = await api.get('cursos/show/' + id);
        return response.data;
    },
    async meusCursos() {
        const response = await api.get('cursos/meus_cursos');
        return response.data;
    },
}

export default cursoService