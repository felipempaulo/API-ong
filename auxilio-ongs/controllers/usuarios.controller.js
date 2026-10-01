import { usuarios } from "../data/database.js";

export function criarUsuario(req, res) {
    const { nome, email, tipo } = req.body;

    if(!nome || !email || !tipo) {
        return res.status(400).json(
            {error: "Nome, email e tipo são obrigatórios."}
        )
    };

    const tiposPermitidos = [
        "DOADOR",
        "VOLUNTARIO",
        "ADMIN"
    ];

    if(!tiposPermitidos.includes(tipo)) {
        return res.status(400).json(
            {error: "Tipo de usuário inválido."}
        )
    };

    const usuarioCriado = {
        id: usuarios.length +1,
        nome,
        email,
        tipo
    };

    usuarios.push(usuarioCriado);

    res.status(201).json(usuarioCriado);
}