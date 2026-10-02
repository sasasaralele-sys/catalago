import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

export default function Detalhes({ route }) {
  const { id } = route.params;
  const [jogo, setJogo] = useState(null);
  const [carregando, setCarregando] = useState(true);

  // Altere para o IP local da sua máquina
  const API_URL = `http://192.168.1.100:3000/jogos/${id}`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setJogo(data);
        setCarregando(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes:', error);
        setCarregando(false);
      });
  }, [id]);

  if (carregando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#7209B7" />
      </View>
    );
  }

  if (!jogo) {
    return (
      <View style={styles.center}>
        <Text style={styles.erro}>Jogo não encontrado no pergaminho.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.nome}>{jogo.nome}</Text>
      <View style={styles.card}>
        <Text style={styles.label}>🔮 Gênero</Text>
        <Text style={styles.valor}>{jogo.genero}</Text>

        <Text style={styles.label}>🗡️ Plataforma</Text>
        <Text style={styles.valor}>{jogo.plataforma}</Text>

        <Text style={styles.label}>📜 Ano de Lançamento</Text>
        <Text style={styles.valor}>{jogo.ano}</Text>

        <Text style={styles.label}>🏰 Desenvolvedora</Text>
        <Text style={styles.valor}>{jogo.desenvolvedora}</Text>

        <Text style={styles.label}>📖 Descrição</Text>
        <Text style={styles.valorDescricao}>{jogo.descricao}</Text>
      </View>
    </ScrollView>
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
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D4A373',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1E281E',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3A5A40',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#C77DFF', // Roxo claro místico
    marginTop: 12,
  },
  valor: {
    fontSize: 16,
    color: '#E0E1DD',
    marginTop: 2,
  },
  valorDescricao: {
    fontSize: 15,
    color: '#CCD5AE',
    marginTop: 4,
    lineHeight: 22,
  },
  erro: {
    fontSize: 16,
    color: '#E63946',
  },
});