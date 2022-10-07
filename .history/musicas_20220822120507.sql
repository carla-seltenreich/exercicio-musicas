CREATE TABLE generos (
    id INT PRIMARY KEY,
    descricao VARCHAR (45) NOT NULL
);

CREATE table musicas (
    id INT primary key,
    nome VARCHAR(200) not null,
    artista VARCHAR (200) not NULL,
    album VARCHAR (200) not null,
    genero_id int not null,
    CONSTRAINT musicas_genero_id_fk FOREIGN KEY (genero_id) REFERENCES generos
(id)
);

INSERT INTO generos VALUES (1, 'funk');
INSERT INTO generos VALUES (2, 'rock');
INSERT INTO generos VALUES (3, 'trance');
INSERT INTO generos VALUES (4, 'metal');
INSERT INTO generos VALUES (5, 'sertanejo');
INSERT INTO generos VALUES (6, 'pop');
INSERT INTO generos VALUES (7, 'pagode');
INSERT INTO generos VALUES (8, 'trance');
INSERT INTO generos VALUES (9, 'pagode');
INSERT INTO generos VALUES (10, 'trance');



INSERT INTO musicas VALUES (1, 'A Maior Saudade', 'Henrique & Juliano', 'Manifesto Musical Vol.1', 5);
INSERT INTO musicas VALUES (2, 'Balikali', 'Dead Musicians Society, Blazy, Undercover, Aura Vortex', 'The Sound Of Psy-Trance, Vol. 01', 3);
INSERT INTO musicas VALUES (3, 'All Along the Watchtower', 'Jimi Hendrix', 'Electric Ladyland', 2);
INSERT INTO musicas VALUES (4, 'Te prometo', 'Dennis DJ, MC Don Juan', 'Pagode e Funk As Melhores', 1);
INSERT INTO musicas VALUES (5, 'A Gente Tem Tudo a Ver', 'Turma do pagode', 'O Som das Multidões', 7);
INSERT INTO musicas VALUES (6, 'Nosso amor quer paz', 'Péricles, Marvvila', 'Pagode do Pericão II, parte 1', 9);
INSERT INTO musicas VALUES (7, 'Incoming', 'Astrix', 'Incoming', 8);
INSERT INTO musicas VALUES (8, 'Sem Chão', 'Mandragora', 'Sem chão', 10);
INSERT INTO musicas VALUES (9, 'Mandala', 'Blastoyz', 'Mandala', 3);
INSERT INTO musicas VALUES (10, 'Cheia de Manias', 'Raça Negra', 'Raça Negra (1992)', 7);

select musicas.nome, musicas.artista, musicas.album, generos.descricao as genero from musicas INNER JOIN generos ON musicas.genero_id = generos.id;
