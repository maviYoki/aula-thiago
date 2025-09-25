import { Button, View, Text } from 'react-native';

export default function TelaDetalhe({ navigation, route }) {
  const { produtoId } = route.params;
  return (
    <View>
      <Text>📓 Tela Detalhe</Text>
      <Text>Id do Produto: {produtoId}</Text>
      <Button
        title="ir para Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}
