const pg = require('pg')

console.log("conexão");

const client = new pg.Client({

    user: "postgres",
    password: "alunocrieti",
    host: "177.44.248.35",
    port: 5432,
    database: "curso"
});

client.connect();
module.exports = client;