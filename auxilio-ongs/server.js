import express from 'express';

import campanhasRoutes from "./routes/campanhas.routes.js"
import doacoesRoutes from "./routes/doacoes.routes.js"
import usuariosRoutes from "./routes/usuarios.routes.js"
import acoesRoutes from "./routes/acoes.routes.js"

const app = express();
const PORTA = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API da ONG funcionando!"
    });
});

app.use("/campanhas", campanhasRoutes);
app.use("/doacoes", doacoesRoutes);
app.use("/usuarios", usuariosRoutes);
app.use("/acoes", acoesRoutes);

app.use((req, res) => {
    res.status(404).json(
        {error: "Rota não encontrada."}
    )
})

app.listen(PORTA, () => {
    console.log(`Servidor escutando em http://localhost:${PORTA}`);
});