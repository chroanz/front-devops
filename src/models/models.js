export const Aula = {
    id: {type: Number, default: null},
    sequencia: Number,
    titulo: String,
    duracaoMinutos: Number,
    video: {type: String, default: null}
}

export const Exercicio = {
    id: {type: Number, default: null},
    sequencia: Number,
    titulo: String,
    conteudo: String
}

export const Curso = {
    id: { type: Number, default: null },
    type: Number, // 1 Cegueira, 2 Surdez, 3 Surdocegueira,
    nome: String,
    descricao: String,
    imagem: String,
    aulas: { type: Array, default: () => [] },
    exercicios: {type: Array, default: () => []}
}