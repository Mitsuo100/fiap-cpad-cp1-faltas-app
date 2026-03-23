import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { adicionarFalta, alunos } from '../data/alunos';
import { useState } from 'react';

export default function Aluno() {
  const { nome } = useLocalSearchParams();

  const aluno = alunos.find(a => a.nome === nome);
  const [faltas, setFaltas] = useState(aluno?.faltas || 0);

  function registrarFalta() {
    adicionarFalta(nome);
    setFaltas(faltas + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.faltas}>Faltas: {faltas}</Text>

      <TouchableOpacity style={styles.botao} onPress={registrarFalta}>
        <Text style={styles.textoBotao}>Registrar Falta</Text>
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
  nome: {
    color: '#ED145B',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10
  },
  faltas: {
    color: '#fff',
    fontSize: 20,
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