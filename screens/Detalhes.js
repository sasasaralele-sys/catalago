import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { globalStyles, CORES } from './theme';

export default function Detalhes({ route, navigation }) {
  // Pega o jogo passado por parâmetro (ou usa um objeto padrão caso acesse direto)
  const { jogo } = route?.params || {
    nome: 'The Legend of Zelda: Breath of the Wild',
    genero: 'Ação/Aventura',
    plataforma: 'Nintendo Switch',
    ano: '2017',
    descricao: 'Entre em um mundo de descoberta, exploração e aventura em The Legend of Zelda: Breath of the Wild, um novo jogo da aclamada série que quebra barreiras.',
  };

  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Botão de Voltar Integrado */}
      <TouchableOpacity 
        style={globalStyles.botaoVoltar} 
        onPress={() => navigation?.goBack()}
      >
        <Text style={globalStyles.textoBotaoVoltar}>← Voltar para o Catálogo</Text>
      </TouchableOpacity>

      {/* Hero Card Principal */}
      <View style={globalStyles.cardDetalhesPrincipal}>
        <Text style={globalStyles.tituloDetalhes}>{jogo.nome}</Text>
        
        {/* Badges de Destaque */}
        <View style={globalStyles.tagsContainerDetalhes}>
          <View style={globalStyles.badgeDestaque}>
            <Text style={globalStyles.textoBadgeDestaque}>📅 {jogo.ano}</Text>
          </View>
          <View style={globalStyles.badgeGenero}>
            <Text style={globalStyles.textoBadgeGenero}>🎮 {jogo.genero}</Text>
          </View>
          <View style={globalStyles.badgePlataforma}>
            <Text style={globalStyles.textoBadgePlataforma}>💻 {jogo.plataforma}</Text>
          </View>
        </View>
      </View>

      {/* Seção de Descrição / Sinopse */}
      <View style={globalStyles.cardSecao}>
        <Text style={globalStyles.labelSecao}>Sobre o Jogo</Text>
        <Text style={globalStyles.textoDescricaoDetalhada}>
          {jogo.descricao || 'Nenhuma descrição detalhada informada para este título.'}
        </Text>
      </View>

      {/* Informações Complementares */}
      <View style={globalStyles.gridInfo}>
        <View style={[globalStyles.cardSecao, { flex: 1, marginRight: 8 }]}>
          <Text style={globalStyles.labelSubInfo}>Plataforma</Text>
          <Text style={globalStyles.valorSubInfo}>{jogo.plataforma}</Text>
        </View>
        <View style={[globalStyles.cardSecao, { flex: 1, marginLeft: 8 }]}>
          <Text style={globalStyles.labelSubInfo}>Ano de Lançamento</Text>
          <Text style={globalStyles.valorSubInfo}>{jogo.ano}</Text>
        </View>
      </View>
    </ScrollView>
  );
}