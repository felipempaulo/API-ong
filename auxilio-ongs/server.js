import http from "node:http";

const PORTA = 3000;

server.listen(PORTA, () => {
    console.log(`Servidor escutando em http://localhost:${PORTA}`);
});