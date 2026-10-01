import { campanhas, doacoes, usuarios } from "../data/database.js";

export function listarDoacoes(req, res) {
    res.status(200).json(doacoes);
}

export function criarDoacao(req, res) {
    const { campanhaId, usuarioId, valor, anonima = false} = req.body;

    if (!campanhaId) {
        return res.status(400).json(
            {error: "O ID da campanha é obrigatorio."}
        );
    }

    if(!valor || valor <= 0) {
        return res.status(400).json(
            {error: "O valor da doação deve ser maior que zero."}
        );
    }

    const campanha = campanhas.find(
        campanha => campanha.id === Number(campanhaId)
    );

    if(!campanha) {
        return res.status(404).json(
            {error: "Campanha não encontrada."}
        )
    }

    const usuario = usuarios.find(
        usuario => usuario.id === Number(usuarioId)
    );

    if(!usuario) {
        return res.status(404).json(
            {error: "Usuário não encontrado."}
        )
    };

    if(usuario.tipo !== "DOADOR") {
        return res.status(400).json(
            {error: "Apenas um usuário DOADOR pode realizar doações."}
        )
    };

    const doacaoCriada = {
        id: doacoes.length +1,
        campanhaId: Number(campanhaId),
        usuarioId: Number(usuarioId),
        valor,
        anonima
    };

    doacoes.push(doacaoCriada);

    campanha.arrecadado += valor;

    return res.status(201).json(doacaoCriada);
}