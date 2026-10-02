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

export function criarAcao(req, res) {
    const {
        campanhaId,
        titulo,
        descricao,
        data,
        vagas
    } = req.body;

    if(!campanhaId || !titulo || !descricao || !data || !vagas) {
        return res.status(400).json(
            {error: "A campanha, titulo, descrição, data e vagas são campos obrigatórios."}
        )
    };

    const campanha = campanhas.find(
        campanha => campanha.id === Number(campanhaId)
    );

    if(!campanha) {
        return res.status(404).json(
            {error: "Campanha não encontrada."}
        )
    };

    if(vagas <= 0) {
        return res.status(400).json(
            {error: "O número de vagas deve ser maior que zero."}
        );
    }

    const novaAcao = {
        id: acoes.length +1,
        campanhaId: Number(campanhaId),
        titulo,
        descricao,
        data,
        vagas: Number(vagas)
    };

    acoes.push(novaAcao);

    res.status(201).json(novaAcao);
}