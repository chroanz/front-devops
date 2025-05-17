export const Aula = {
  id: { type: Number, default: null },
  sequencia: Number,
  titulo: String,
  duracaoMinutos: Number,
  videoUrl: String,
  vista: Boolean,
  curso_id: Number,
  video: { type: String, default: null },
};

export const Leitura = {
  id: { type: Number, default: null },
  curso_id: Number,
  sequencia: Number,
  titulo: String,
  lido: Boolean,
  conteudo: String,
};

export const Curso = {
  id: { type: Number, default: null },
  type: Number, // 1 Cegueira, 2 Surdez, 3 Surdocegueira,
  nome: String,
  descricao: String,
  imagem: String,
  aulas: { type: Array, default: () => [] },
  leituras: { type: Array, default: () => [] },
};
