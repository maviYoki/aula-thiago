import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './HomeScreen';
import { SettingScreen } from './SettingScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Configurações" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
