import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>✨ Grimório de Jogos ✨</Text>
      <Text style={styles.subtitulo}>Explore a coleção ancestral de jogos cadastrados...</Text>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Catalogo')}
      >
        <Text style={styles.textoBotao}>Abrir Catálogo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121612', // Fundo bem escuro com tom verde/noite
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#D4A373', // Tom bege pergaminho / ouro velho
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 35,
    color: '#A3B18A', // Verde musgo claro
    fontStyle: 'italic',
  },
  botao: {
    backgroundColor: '#5A189A', // Roxo bruxa
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#7209B7',
    shadowColor: '#7209B7',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
  textoBotao: {
    color: '#F4F1DE',
    fontSize: 18,
    fontWeight: 'bold',
  },
});