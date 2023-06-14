// src/server.js
const app = require('./app');

// através do app.listen que damos start em nosso servidor, recebe até dois parâmetros, o primeiro é o port, segundo é uma função

app.listen(3001, () => console.log('Server running on port 3001!'));