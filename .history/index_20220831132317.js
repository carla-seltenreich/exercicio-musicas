const http = require('http');
const client = require('./dataBase.js');
const PORT = 3003;

async function getMusicas() {
    let resultado = await client.query('select musicas.nome, musicas.artista, musicas.album, generos.descricao as genero from musicas INNER JOIN generos ON musicas.genero_id = generos.id');
    return resultado.rows;
};

const createServer = () => {
    http.createServer((request, response) => {
        let payload = '';
        request.on('data', (buffer) => {
            payload += buffer;
        });
        request.on('end', async () => {
            payload = payload ? JSON.parse(payload) : undefined;

            const url = request.url;
            const method = request.method;

            let status = 200;
            let data = {};

            if (method === 'GET' && url === '/musicas') {
                data = await getMusicas();
            } else {
                status = 404;
                data = { error: 'Página não encontrada!' };
            }

            response.writeHead(status, { 'Content-type': 'application/json; charset=utf8' });
            response.write(JSON.stringify(data));
            response.end();
        });
    }).listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}/`);
    });
}

createServer();

