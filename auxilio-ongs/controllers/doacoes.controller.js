import { doacoes } from "../data/database";

export function listarDoacoes(req, res) {
    res.status(200).json(doacoes);
}

export function criarDoacao(req, res) {
    const { campanhaId, valor} = req.body;

    if (!campanhaId) {
        return res.status(400).json(
            {error: "O ID da campanha é obrigatporio."}
        );
    }

    if(!valor || valor <= 0) {
        return res.status(400).json(
            {error: "O valor da doação deve ser maior que zero."}
        );

        const campanha = campanha.find(
            campanha => campanha.id === Number(campanhaId)
        );

        if(!campanha) {
            return res.status(404).json(
                {error: "Campanha não encontrada."}
            );
        }

        const doacaoCriada = {
            id: doacoes.length +1,
            campanhaId: Number(campanhaId),
            valor
        };

        doacoes.push(doacaoCriada);

        campanha.arrecadado += valor;

        res.status(201).json(doacaoCriada);
    }
}