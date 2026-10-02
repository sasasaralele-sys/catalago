CREATE DATABASE IF NOT EXISTS catalogo_jogos;
USE catalogo_jogos;

-- 2. Criação da tabela de jogos
CREATE TABLE IF NOT EXISTS jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    plataforma VARCHAR(50) NOT NULL,
    ano INT NOT NULL,
    desenvolvedora VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL
);

-- 3. Inserção dos 6 jogos para teste
INSERT INTO jogos (nome, genero, plataforma, ano, desenvolvedora, descricao) VALUES
('The Legend of Zelda: Breath of the Wild', 'Ação/Aventura', 'Nintendo Switch', 2017, 'Nintendo', 'Um jogo de ação e aventura em mundo aberto onde o jogador controla Link após acordar de um sono de 100 anos.'),
('God of War Ragnarök', 'Ação/Aventura', 'PlayStation 5', 2022, 'Santa Monica Studio', 'Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para a batalha.'),
('Elden Ring', 'RPG de Ação', 'PC / Console', 2022, 'FromSoftware', 'Um RPG de ação num mundo sombrio de fantasia criado por Hidetaka Miyazaki e George R. R. Martin.'),
('Super Mario Odyssey', 'Plataforma', 'Nintendo Switch', 2017, 'Nintendo', 'Mario embarca em uma aventura em 3D ao redor do mundo usando seu novo aliado, Cappy, para resgatar a Princesa Peach.'),
('The Witcher 3: Wild Hunt', 'RPG', 'PC / Console', 2015, 'CD Projekt Red', 'Geralt de Rívia é um caçador de monstros em busca de sua filha adotiva em um mundo devastado pela guerra.'),
('Hollow Knight', 'Metroidvania', 'PC / Console / Switch', 2017, 'Team Cherry', 'Uma aventura de ação clássica em estilo 2D por um vasto mundo interconectado de insetos e heróis.');