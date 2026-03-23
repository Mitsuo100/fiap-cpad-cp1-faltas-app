import { View, Text, FlatList, StyleSheet } from 'react-native';
import { alunos } from '../data/alunos';

export default function Historico() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Faltas</Text>

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.card}>
            {item.nome} - {item.faltas} faltas
          </Text>
        )}
      />
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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20
  },
  card: {
    backgroundColor: '#111',
    color: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10
  }
});