export let alunos = [
  { id: 1, nome: "João", faltas: 0 },
  { id: 2, nome: "Maria", faltas: 0 },
  { id: 3, nome: "Pedro", faltas: 0 }
];

export function adicionarAluno(nome) {
  if (!nome || nome.trim() === "") return "Nome inválido";

  const existe = alunos.some(a => a.nome.toLowerCase() === nome.toLowerCase());
  if (existe) return "Aluno já existe";

  const novo = {
    id: alunos.length + 1,
    nome: nome.trim(),
    faltas: 0
  };

  alunos.push(novo);
  return "ok";
}

export function removerAluno(id) {
  alunos = alunos.filter(aluno => aluno.id !== id);
}

export function adicionarFalta(nome) {
  alunos = alunos.map(aluno =>
    aluno.nome === nome
      ? { ...aluno, faltas: aluno.faltas + 1 }
      : aluno
  );
}