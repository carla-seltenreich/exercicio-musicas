const client = require('./dataBase.js');


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
        const segments = url.split('/').filter((segment) => Boolean(segment));
  
        let status = 200;
        let data = {};
  
        if (method === 'GET' && url === '/users') {
          data = await getUsers();
        } else if (method === 'POST' && url === '/users') {
          data = await createUser(payload);
        } else if (method === 'PUT' && segments[0] === 'users' && segments.length === 2) {
          data = await updateUser(payload, parseInt(segments[1]));
        } else if (method === 'DELETE' && segments[0] === 'users' && segments.length === 2) {
          await deleteUser(parseInt(segments[1]));
          data = {};
        } else if (method === 'GET' && segments[0] === 'users' && segments.length === 2) {
          const user = await findUser(parseInt(segments[1]));
          if (user) {
            data = user;
          } else {
            status = 404;
            data = { error: 'Recurso não encontrado!' };
          }
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

