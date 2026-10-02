import { acoes, campanhas, usuarios } from '../data/database.js';

export function listarAcoes(req, res) {
    res.status(200).json(acoes);
}

export function buscarAcao(req, res) {
    const id = Number(req.params.id);

    const acao = acoes.find(
        acao => acao.id === id
    );

    if(!acao) {
        return res.status(404).json(
            {error: "Ação não encontrada."}
        )
    };

    res.status(200).json(acao)
};