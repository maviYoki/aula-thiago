import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>🏠 Home</Text>
      <Button
        title="ir para Detalhes"
        onPress={() => navigation.navigate('Detalhes', { produtoId: 101 })}
      />
    </View>
  );
}
