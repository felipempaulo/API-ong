import http from "node:http";
import express from 'express';

const app = express();
const PORTA = 3000;

server.listen(PORTA, () => {
    console.log(`Servidor escutando em http://localhost:${PORTA}`);
});