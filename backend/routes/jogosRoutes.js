import { Router } from 'express';
import { listarJogos, buscarJogoPorId } from '../controllers/jogosController.js';

const router = Router();

// Rota para listar todos os jogos
router.get('/jogos', listarJogos);

// Rota para buscar os detalhes de um jogo específico pelo ID
router.get('/jogos/:id', buscarJogoPorId);

export default router;