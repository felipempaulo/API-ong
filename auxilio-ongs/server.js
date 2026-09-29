const http = require('node:http');

const PORTA = 3000;

const server = http.createServer((req, res) => {
    console.log(`Requisição recebida: ${req.method} ${req.url}`);

    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Servidor funcionando!')
});

server.listen(PORTA, () => {
    console.log(`Servidor escutando em http://localhost:${PORTA}`);
});

