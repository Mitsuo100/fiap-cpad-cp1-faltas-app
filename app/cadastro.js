import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { adicionarAluno } from '../data/alunos';
import { router } from 'expo-router';

export default function Cadastro() {
  const [nome, setNome] = useState('');

  function cadastrar() {
    if (nome.trim() === '') return;
    adicionarAluno(nome);
    setNome('');
    router.push('/');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastrar Aluno</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do aluno"
        placeholderTextColor="#aaa"
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity style={styles.botao} onPress={cadastrar}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center'
  },
  titulo: {
    color: '#ED145B',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#111',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },
  botao: {
    backgroundColor: '#ED145B',
    padding: 15,
    borderRadius: 10
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});