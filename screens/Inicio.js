import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './theme';

export default function Inicio({ navigation }) {
  return (
    <View style={globalStyles.center}>
      <Text style={globalStyles.iconeInicio}>🔮</Text>
      <Text style={globalStyles.tituloTela}>Grimório dos Jogos</Text>
      <Text style={globalStyles.subtituloInicio}>
        Explore a sua coleção mística de jogos cadastrados.
      </Text>

      <TouchableOpacity
        style={globalStyles.botaoInicio}
        onPress={() => navigation.navigate('Catalogo')}
      >
        <Text style={globalStyles.textoBotaoInicio}>Entrar no Catálogo</Text>
      </TouchableOpacity>
    </View>
  );
}