import http from "node:http";
import express from 'express';

const app = express();
const PORTA = 3000;

const campanhas = [];

const doacoes = [];

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({mensagem: 'API da ONG funcionando!'})
});


app.get('/campanhas', (req, res) => {
    res.status(200).json(campanhas)
});

app.post('/campanhas', (req, res) => {
    const novaCampanha = req.body;

   if(!novaCampanha.titulo) {
    return res.status(400).json(
        {error: 'O campo de título é obrigatório.'}
    );
   }

   if(!novaCampanha.meta || novaCampanha.meta <= 0) {
    return res.status(400).json(
        {error: 'O campo de meta é obrigatório e deve ser maior que zero.'}
    )
   }

   const campanhaCriada = {
    id: campanhas.length +1,
    titulo: novaCampanha.titulo,
    meta: novaCampanha.meta,
    arrecadada: 0
   };

   campanhas.push(campanhaCriada);

   res.status(201).json(campanhaCriada)
})

server.listen(PORTA, () => {
    console.log(`Servidor escutando em http://localhost:${PORTA}`);
});