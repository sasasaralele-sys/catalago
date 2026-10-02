import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

export default function Catalogo({ navigation }) {
  const [jogos, setJogos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Altere para o IP local da sua máquina
  const API_URL = 'http://192.168.1.100:3000/jogos';

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setJogos(data);
        setCarregando(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar jogos:', error);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#7209B7" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detalhes', { id: item.id })}
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.info}><Text style={styles.destaque}>Gênero:</Text> {item.genero}</Text>
            <Text style={styles.info}><Text style={styles.destaque}>Plataforma:</Text> {item.plataforma}</Text>
            <Text style={styles.info}><Text style={styles.destaque}>Ano:</Text> {item.ano}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121612',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121612',
  },
  card: {
    backgroundColor: '#1E281E', // Verde musgo bem escuro
    padding: 16,
    borderRadius: 10,
    marginBottom: 14,
    borderLeftWidth: 5,
    borderLeftColor: '#7209B7', // Detalhe lateral em roxo místico
    borderWidth: 1,
    borderColor: '#3A5A40',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D4A373', // Tom pergaminho
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    color: '#E0E1DD',
    marginBottom: 2,
  },
  destaque: {
    color: '#A3B18A', // Musgo suave
    fontWeight: 'bold',
  },
});