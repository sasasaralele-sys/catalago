import { StyleSheet, Platform } from 'react-native';

export const CORES = {
  shadowPond: '#1C292E',      // Fundo principal escuro místico
  amethystLotus: '#3C293F',   // Roxo Ametista para cartões/botões
  verdigris: '#6B8371',       // Verde musgo para bordas/subtítulos
  gildedBlossom: '#C89758',  // Dourado para títulos e destaques
  waterMist: '#81939E',       // Azul nevoeiro para detalhes suaves
  fundoCartao: '#243237',     // Tom intermediário para cartões
  textoBranco: '#F2F4F0',
  textoSuave: '#A2B097',
};

export const globalStyles = StyleSheet.create({
  // 🌌 Layouts Base
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: CORES.shadowPond,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CORES.shadowPond,
    padding: 24,
  },

  // 🔮 Tela de Início (Fix)
  containerInicio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CORES.shadowPond,
    padding: 24,
  },
  iconeInicio: {
    fontSize: 70,
    marginBottom: 20,
  },
  tituloInicio: {
    fontSize: 28,
    fontWeight: 'bold',
    color: CORES.gildedBlossom,
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  subtituloInicio: {
    fontSize: 16,
    color: CORES.waterMist,
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 16,
    lineHeight: 22,
  },
  botaoInicio: {
    backgroundColor: CORES.amethystLotus,
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: CORES.gildedBlossom,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  textoBotaoInicio: {
    color: CORES.gildedBlossom,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },

  // 📚 Cabeçalho Geral das Telas
  headerContainer: {
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  tituloTela: {
    fontSize: 24,
    fontWeight: '800',
    color: CORES.gildedBlossom,
    letterSpacing: 0.5,
  },
  subtituloTela: {
    fontSize: 14,
    color: CORES.waterMist,
    marginTop: 4,
  },

  // 🃏 Cards do Catálogo
  listaContainer: {
    paddingBottom: 24,
  },
  cardCatalogo: {
    backgroundColor: CORES.fundoCartao,
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: CORES.verdigris + '40',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  nomeJogoCard: {
    fontSize: 18,
    fontWeight: '700',
    color: CORES.textoBranco,
    flex: 1,
    paddingRight: 8,
  },
  tagAno: {
    backgroundColor: CORES.amethystLotus,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: CORES.verdigris,
  },
  textoAno: {
    color: CORES.gildedBlossom,
    fontSize: 12,
    fontWeight: 'bold',
  },

  // 🏷️ Badges e Tags
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  badgeGenero: {
    backgroundColor: CORES.shadowPond,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: CORES.verdigris + '80',
  },
  textoBadgeGenero: {
    color: CORES.waterMist,
    fontSize: 12,
    fontWeight: '500',
  },
  badgePlataforma: {
    backgroundColor: CORES.amethystLotus + '60',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: CORES.gildedBlossom + '60',
  },
  textoBadgePlataforma: {
    color: CORES.gildedBlossom,
    fontSize: 12,
    fontWeight: '600',
  },

  // 🔍 Tela de Detalhes
  botaoVoltar: {
    paddingVertical: 10,
    marginBottom: 16,
  },
  textoBotaoVoltar: {
    color: CORES.gildedBlossom,
    fontSize: 15,
    fontWeight: '600',
  },
  cardDetalhesPrincipal: {
    backgroundColor: CORES.amethystLotus,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: CORES.gildedBlossom + '60',
  },
  tituloDetalhes: {
    fontSize: 26,
    fontWeight: 'bold',
    color: CORES.gildedBlossom,
    marginBottom: 14,
    lineHeight: 32,
  },
  tagsContainerDetalhes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  badgeDestaque: {
    backgroundColor: CORES.shadowPond,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: CORES.gildedBlossom + '80',
  },
  textoBadgeDestaque: {
    color: CORES.gildedBlossom,
    fontSize: 13,
    fontWeight: 'bold',
  },
  cardSecao: {
    backgroundColor: CORES.fundoCartao,
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: CORES.verdigris + '40',
  },
  labelSecao: {
    fontSize: 14,
    fontWeight: 'bold',
    color: CORES.gildedBlossom,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
  },
  textoDescricaoDetalhada: {
    fontSize: 15,
    color: CORES.textoBranco,
    lineHeight: 24,
  },
  gridInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelSubInfo: {
    fontSize: 12,
    color: CORES.waterMist,
    marginBottom: 4,
  },
  valorSubInfo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: CORES.textoBranco,
  },
});