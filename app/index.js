import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { alunos, removerAluno } from '../data/alunos';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de Faltas</Text>

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Link href={`/aluno?nome=${item.nome}`} asChild>
              <Text style={styles.card}>{item.nome}</Text>
            </Link>

            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={() => removerAluno(item.id)}
            >
              <Text style={styles.deleteText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Link href="/historico" asChild>
        <Text style={styles.botao}>Ver Histórico</Text>
      </Link>

      <Link href="/cadastro" asChild>
        <Text style={styles.botao}>Cadastrar Aluno</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20
  },
  titulo: {
    color: '#ED145B',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  card: {
    flex: 1,
    backgroundColor: '#111',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#ED145B'
  },
  deleteBtn: {
    marginLeft: 10,
    backgroundColor: '#ED145B',
    padding: 10,
    borderRadius: 8
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  botao: {
    marginTop: 10,
    backgroundColor: '#ED145B',
    color: '#fff',
    padding: 15,
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: 'bold'
  }
});