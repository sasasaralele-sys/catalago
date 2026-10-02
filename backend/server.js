import express from 'express';
import cors from 'cors';
import jogosRoutes from './routes/jogosRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Registra as rotas da API
app.use(jogosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor a rodar na porta ${PORT}`);
});