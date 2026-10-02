import conexao from '../database/conexao.js';

// Buscar todos os jogos
export const listarJogos = async (req, res) => {
  try {
    const [jogos] = await conexao.query('SELECT id, nome, genero, plataforma, ano FROM jogos');
    res.json(jogos);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar jogos', erro: error.message });
  }
};

// Buscar jogo por ID (Consulta parametrizada)
export const buscarJogoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const [jogos] = await conexao.query('SELECT * FROM jogos WHERE id = ?', [id]);
    
    if (jogos.length === 0) {
      return res.status(404).json({ mensagem: 'Jogo não encontrado' });
    }

    res.json(jogos[0]);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar o jogo', erro: error.message });
  }
};