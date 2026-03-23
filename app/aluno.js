import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { carregarAlunos, salvarAlunos } from '../data/storage';

export default function Aluno() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await carregarAlunos();
    setAlunos(data);
  }

  async function adicionarFalta(id) {
    const novos = alunos.map(aluno =>
      aluno.id === id
        ? { ...aluno, faltas: aluno.faltas + 1 }
        : aluno
    );

    setAlunos(novos);
    await salvarAlunos(novos);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Faltas</Text>

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => adicionarFalta(item.id)}
            activeOpacity={0.7}
          >
            <Text style={styles.nome}>{item.nome}</Text>

            <View style={styles.badge}>
              <Text style={styles.faltas}>
                {item.faltas} faltas
              </Text>
            </View>

            <Text style={styles.hint}>Toque para adicionar falta</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    padding: 20
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ED145B',
    marginBottom: 20
  },

  card: {
    backgroundColor: '#1a1a1a',
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#ED145B'
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },

  badge: {
    marginTop: 8,
    alignSelf: 'flex-start',
    backgroundColor: '#ED145B',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20
  },

  faltas: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12
  },

  hint: {
    marginTop: 8,
    color: '#aaa',
    fontSize: 12
  }
});