import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { alunos } from '../data/alunos';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de Faltas</Text>

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/aluno?nome=${item.nome}`} asChild>
            <Text style={styles.card}>{item.nome}</Text>
          </Link>
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
  card: {
    backgroundColor: '#111',
    color: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#ED145B'
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