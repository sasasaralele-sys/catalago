import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles, CORES } from './theme';

// Dados de exemplo (substitua pelo seu estado/props)
const jogosExemplo = [
  { id: '1', nome: 'The Legend of Zelda: Breath of the Wild', genero: 'Ação/Aventura', plataforma: 'Nintendo Switch', ano: '2017' },
  { id: '2', nome: 'God of War Ragnarök', genero: 'Ação/Aventura', plataforma: 'PlayStation 5', ano: '2022' },
  { id: '3', nome: 'Elden Ring', genero: 'RPG de Ação', plataforma: 'PC / Console', ano: '2022' },
  { id: '4', nome: 'Super Mario Odyssey', genero: 'Plataforma', plataforma: 'Nintendo Switch', ano: '2017' },
];

export default function Catalogo({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={globalStyles.cardCatalogo}
      activeOpacity={0.7}
      onPress={() => navigation?.navigate('Detalhes', { jogo: item })}
    >
      <View style={globalStyles.cardHeader}>
        <Text style={globalStyles.nomeJogoCard}>{item.nome}</Text>
        <View style={globalStyles.tagAno}>
          <Text style={globalStyles.textoAno}>{item.ano}</Text>
        </View>
      </View>

      <View style={globalStyles.tagsContainer}>
        <View style={globalStyles.badgeGenero}>
          <Text style={globalStyles.textoBadgeGenero}>🎮 {item.genero}</Text>
        </View>
        <View style={globalStyles.badgePlataforma}>
          <Text style={globalStyles.textoBadgePlataforma}>💻 {item.plataforma}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.tituloTela}>Catálogo de Jogos</Text>
        <Text style={globalStyles.subtituloTela}>Sua biblioteca selecionada</Text>
      </View>

      <FlatList
        data={jogosExemplo}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={globalStyles.listaContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}