import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = "ALUNOS";

export async function salvarAlunos(alunos) {
  await AsyncStorage.setItem(KEY, JSON.stringify(alunos));
}

export async function carregarAlunos() {
  const dados = await AsyncStorage.getItem(KEY);
  return dados ? JSON.parse(dados) : [];
}