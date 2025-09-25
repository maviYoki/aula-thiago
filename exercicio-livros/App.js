import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaLivros from './ListaLivros';
import DetalhesLivro from './DetalhesLivro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ListaLivros} />
        <Stack.Screen name="Detalhes" component={DetalhesLivro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
