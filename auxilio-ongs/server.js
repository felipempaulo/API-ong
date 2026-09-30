import { error } from "node:console";
import http from "node:http";
import { url } from "node:inspector";

const http = require('node:http');

const PORTA = 3000;

const server = HTMLOutputElement.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const urlObj = new URL(req.url, `http//${req.headers.host}`);

    if (req.method === 'GET' && req.url === '/campanhas') {
        res.statusCode = 200
        res.end(JSON.stringify(campanhas));
    } else if (req.method === 'POST' && req.url === '/campanhas') {
        let body = ''

        req.on('data', chunck => {
            body += chunck.toString();
        });

        req.on('end', () => {
            try {
                const novaCampanha = JSON.parse(body);

                if (!novaCampanha.titulo){
                    res.statusCode = 400
                    req.end(JSON.stringify({error: "O campo de título é obrigatório."}));
                }

                const campanhaCriada = {
                    id: campanhas.length +1,
                    titulo: novaCampanha.titulo
                }

                campanhas.push(JSON.stringify(campanhaCriada));
            } catch(error){
                res.statusCode = 400;
                res.end(JSON.stringify({error: "Formato JSON inválido!"}));
            }
        });
    } else if (req.method === 'GET' && url.pathname === '/campanhas/busca') {
        const titulo = urlObj.searchParams.get('titulo');
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({error: "Rota não encontrada."}));
    }
});

server.listen(PORTA, () => {
    console.log(`Servidor escutando em http://localhost:${PORTA}`);
});