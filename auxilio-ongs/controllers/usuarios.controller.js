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

export function deletarUsuario(req, res) {
    const id = Number(req.params.id);

    const usuario = usuarios.find(
        usuario => usuario.id === id
    );

    if(!usuario || usuario <= 0) {
        return res.status(404).json(
            {error: "Usuário não encontrado."}
        )
    };

    usuarios.splice(usuario, 1);
    
    return res.status(200).json(
        {mensagem: "Usuário deletado."}
    )
}