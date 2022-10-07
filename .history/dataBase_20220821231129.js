const pg = require('pg')

console.log("conexão");

const client = new pg.Client({

    user: "postgres",
    password: "alunocrieti",
    host: "localhost",
    port: 5432,
    database: "musicas"
});

client.connect();
module.exports = client;