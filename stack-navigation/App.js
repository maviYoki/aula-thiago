import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './TelaHome';
import TelaDetalhe from './TelaDetalhe';
import TelaPerfil from './TelaPerfil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home'component={HomeScreen} />
        <Stack.Screen name='Detalhes' component={TelaDetalhe}/>
        <Stack.Screen name='Perfil' component={TelaPerfil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


