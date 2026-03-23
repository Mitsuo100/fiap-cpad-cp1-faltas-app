import { View, Text, TouchableOpacity } from 'react-native';

export default function AlunoCard({ nome, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{nome}</Text>
      </View>
    </TouchableOpacity>
  );
}