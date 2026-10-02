import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importação das 3 telas que ficam na pasta screens
import Inicio from './screens/Inicio';
import Catalogo from './screens/Catalogo';
import Detalhes from './screens/Detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{ title: 'Início' }} 
        />
        <Stack.Screen 
          name="Catalogo" 
          component={Catalogo} 
          options={{ title: 'Catálogo de Jogos' }} 
        />
        <Stack.Screen 
          name="Detalhes" 
          component={Detalhes} 
          options={{ title: 'Detalhes do Jogo' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}