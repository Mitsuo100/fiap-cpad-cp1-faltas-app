export function adicionarAluno(nome) {
  const novo = {
    id: alunos.length + 1,
    nome,
    faltas: 0
  };
  alunos.push(novo);
}