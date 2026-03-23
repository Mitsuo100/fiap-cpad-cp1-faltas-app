import { View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function Aluno() {
  const { nome } = useLocalSearchParams();
  const [faltas, setFaltas] = useState(0);

  useEffect(() => {
    console.log("Tela carregada");
  }, []);

  return (
    <View>
      <Text>Aluno: {nome}</Text>
      <Text>Faltas: {faltas}</Text>

      <TouchableOpacity onPress={() => setFaltas(faltas + 1)}>
        <Text>Registrar Falta</Text>
      </TouchableOpacity>
    </View>
  );
}