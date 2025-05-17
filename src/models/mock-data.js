export const listaCursos = [
  {
    id: 1,
    nome: "Aprendendo Libras",
    descricao:
      "Aprenda a utilizar a Língua Brasileira de Sinais (Libras) e garanta o atendimento e o tratamento adequado às pessoas com deficiência auditiva",
    imagem: "curso_libras.png",
    aulas: [
      {
        sequencia: 1,
        titulo: "Teste",
        duracaoMinutos: 3,
        curso_id: 1,
        videoUrl: "https://example.com/video1.mp4",
        id: 433,
      },
      {
        sequencia: 2,
        titulo: "Teste 2",
        duracaoMinutos: 4,
        curso_id: 1,
        videoUrl: "https://www.youtube.com/watch?v=-ZDkdbPqUZg",
        id: 978,
      },
    ],
    leituras: [
      {
        sequencia: 1,
        id: 4,
        titulo: "Teste 1",
        lido: true,
        curso_id: 1,
      },
      {
        sequencia: 2,
        id: 78,
        titulo: "Teste 3",
        lido: false,
        curso_id: 1,
      },
    ],
  },
  {
    id: 2,
    nome: "Recebendo alunos com surdez",
    descricao:
      "Neste curso, você irá aprender como realizar o acolhimento de alunos com deficiência auditiva, como aspectos dos cuidados com os dispositivos auditivos, especialmente em termos de higienização; atividades de estimulação de habilidades comunicativas, etc.",
    imagem: "recebendo_surdos.png",
    aulas: [
      {
        sequencia: 1,
        titulo: "Introdução à Surdez",
        duracaoMinutos: 10,
        curso_id: 2,
        videoUrl: "https://example.com/video3.mp4",
        id: 145,
      },
      {
        sequencia: 2,
        titulo: "Acolhimento de Alunos com Surdez",
        duracaoMinutos: 15,
        curso_id: 2,
        videoUrl: "https://youtube.com/watch?v=example4",
        id: 267,
      },
    ],
    leituras: [
      {
        sequencia: 1,
        titulo: "Exercício 1",
        curso_id: 2,
        id: 389,
        lido: false,
      },
      {
        sequencia: 2,
        titulo: "Exercício 2",
        curso_id: 2,
        id: 412,
        lido: false,
      },
    ],
  },
  {
    id: 3,
    nome: "Ensino de Libras",
    descricao:
      "Aprenda como trabalhar com alunos com experiência de vidas diversas, a ensinar sinais e gramática, como avaliar os alunos, o porquê dar enfoque à literatura, e mais.",
    imagem: "ensino_libras.png",
    aulas: [
      {
        sequencia: 1,
        titulo: "Introdução à Libras",
        duracaoMinutos: 12,
        curso_id: 3,
        videoUrl: "https://example.com/video5.mp4",
        id: 534,
      },
      {
        sequencia: 2,
        titulo: "Acessibilidade e Inclusão",
        duracaoMinutos: 20,
        curso_id: 3,
        videoUrl: "https://youtube.com/watch?v=example6",
        id: 656,
      },
    ],
    leituras: [
      {
        sequencia: 1,
        titulo: "Leitura sobre aplicação de acessibilidade no ensino de libras",
        curso_id: 3,
        id: 778,
        lido: false,
      },
      {
        sequencia: 2,
        titulo: "Teste de Acessibilidade",
        curso_id: 3,
        id: 891,
        lido: false,
      },
    ],
  },
];
