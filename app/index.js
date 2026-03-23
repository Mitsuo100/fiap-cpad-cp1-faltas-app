import { View, Text, FlatList } from 'react-native';
import { Link } from 'expo-router';

const alunos = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Maria" },
  { id: 3, nome: "Pedro" }
];

export default function Home() {
  return (
    <View>
      <Text>Lista de Alunos</Text>

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/aluno?nome=${item.nome}`}>
            <Text>{item.nome}</Text>
          </Link>
        )}
      />

      <Link href="/historico">
        <Text>Ver Histórico</Text>
      </Link>
    </View>
  );
}