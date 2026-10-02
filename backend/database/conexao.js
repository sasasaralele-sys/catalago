import mysql from 'mysql2/promise';

// Configuração da conexão com o MySQL local
const conexao = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin', // Coloca a tua senha do MySQL aqui se tiveres uma definida
  database: 'catalogo_jogos',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default conexao;