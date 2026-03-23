export let alunos = [
  { id: 1, nome: "João", faltas: 0 },
  { id: 2, nome: "Maria", faltas: 0 },
  { id: 3, nome: "Pedro", faltas: 0 }
];

export function adicionarAluno(nome) {
  if (!nome || nome.trim() === "") return;

  const novoAluno = {
    id: alunos.length + 1,
    nome: nome.trim(),
    faltas: 0
  };

  alunos.push(novoAluno);
}

export function adicionarFalta(nome) {
  alunos = alunos.map(aluno =>
    aluno.nome === nome
      ? { ...aluno, faltas: aluno.faltas + 1 }
      : aluno
  );
}