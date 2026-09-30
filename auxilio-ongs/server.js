import http from "node:http";

const PORTA = 3000;

const campanhas = [];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const urlObj = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'GET' && urlObj.pathname === '/') {
        res.statusCode = 200;
        res.end(JSON.stringify({mensagem: "API da ONG funcionando!"}));
    } else if (req.method === 'GET' && urlObj.pathname === '/campanhas') {
        res.statusCode = 200
        res.end(JSON.stringify(campanhas));
    } else if (req.method === 'POST' && urlObj.pathname === '/campanhas') {
        let body = ''

        req.on('data', chunck => {
            body += chunck.toString();
        });

        req.on('end', () => {
            try {
                const novaCampanha = JSON.parse(body);

                if (!novaCampanha.titulo){
                    res.statusCode = 400;
                    return res.end(JSON.stringify({error: "O campo de título é obrigatório."}));
                }

                const campanhaCriada = {
                    id: campanhas.length +1,
                    titulo: novaCampanha.titulo
                }

                campanhas.push(JSON.stringify(campanhaCriada));
                res.statusCode = 201;
                res.end(JSON.stringify(campanhaCriada));
            } catch(error){
                res.statusCode = 400;
                res.end(JSON.stringify({error: "Formato JSON inválido!"}));
            }
        });
    } else if (req.method === 'GET' && urlObj.pathname === '/campanhas/busca') {
        const titulo = urlObj.searchParams.get('titulo');
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({error: "Rota não encontrada."}));
    }
});

server.listen(PORTA, () => {
    console.log(`Servidor escutando em http://localhost:${PORTA}`);
});