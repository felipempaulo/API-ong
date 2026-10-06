import { acoes, campanhas, usuarios, escalas } from '../data/database.js';

export function listarAcoes(req, res) {
    res.status(200).json(acoes);
}

export function buscarAcao(req, res) {
    const id = Number(req.params.id);

    const acao = acoes.find(
        acao => acao.id === id
    );

    const campanha = campanhas.find(
        campanha => campanha.id === acao.campanhaId
    )

    if(!acao) {
        return res.status(404).json(
            {error: "Ação não encontrada."}
        )
    };

    res.status(200).json({
        ...acao,
        campanha
    })
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

export function escalarVoluntario(req, res) {
    const acaoId = Number(req.params.id);
    const {usuarioId} = req.body;

    const acao = acoes.find(
        acao => acao.id === acaoId
    );

    if(!acao) {
        return res.status(404).json(
            {error: "Ação não encontrada."}
        )
    };

    const usuario = usuarios.find(
        usuario => usuario.id === Number(usuarioId)
    );

    if(!usuario) {
        return res.status(404).json(
            {error: "Usuário não encontrado."}
        )
    };

    if(usuario.tipo !== "VOLUNTARIO") {
        return res.status(400).json(
            {error: "Apenas usuários voluntarios podem participar de ações."}
        )
    };

    const jaEscalado = escalas.find(
        escala => 
            escala.acaoId === acaoId &&
        escala.usuarioId === Number(usuarioId)
    );

    if(jaEscalado) {
        return res.status(400).json(
            {error: "Esse voluntário já está escalado para a ação."}
        )
    };

    const quantidadeVoluntarios = escalas.filter(
        escala => escala.acaoId === acaoId
    ).length;

    if(quantidadeVoluntarios >= acao.vagas) {
        return res.status(400).json(
            {error: "Não há mais vagas para a ação."}
        )
    };

    const novaEscala = {
        id: escalas.length +1,
        acaoId,
        usuarioId: Number(usuarioId)
    };

    escalas.push(novaEscala);

    res.status(201).json(novaEscala);
}

export function listarVoluntarios(req, res) {
    const acaoId = Number(req.params.id);

    const acao = acoes.find(
        acao => acao.id === acaoId
    );

    if(!acao) {
        return res.status(404).json(
            {error: "Ação não encontrada."}
        )
    };

    const voluntarios = escalas
        .filter(escala => escala.acaoId === acaoId)
        .map(escala => {
            return usuarios.find(
                usuario => usuario.id === escala.usuarioId
            );
        });

        res.status(200).json(voluntarios)
}

export function deletarAcao(req, res) {
    const id = Number(req.params.id);

    const acao = acoes.find(
        acao => acao.id === id
    );

    if(!acao || acao <= 0) {
        return res.status(404).json(
            {error: "Ação não encontrada."}
        )
    };

    acoes.splice(acao, 1);
    
    return res.status(200).json(
        {mensagem: "Ação deletada."}
    )
}

export function editarAcao(req, res) {
    const id = Number(req.params.id);
    const { titulo, descricao, data, vagas } = req.body;

    const acao = acoes.find(
        acao => acao.id === id
    );  

    if(!acao) {
        return res.status(404).json(
            {error: "Ação não encontrada."}
        );
    }

    if(titulo) acao.titulo = titulo;
    if(descricao) acao.descricao = descricao;
    if(data) acao.data = data;
    if(vagas) acao.vagas = Number(vagas);

    res.status(200).json(acao);
}

export function deletarVoluntario(req, res) {
    const acaoId = Number(req.params.id);
    const usuarioId = Number(req.body.usuarioId);

    const acao = acoes.find(
        acao => acao.id === acaoId
    );

    if(!acao) {
        return res.status(404).json(
            {error: "Ação não encontrada."}
        )
    };

    const usuario = usuarios.find(
        usuario => usuario.id === usuarioId
    );  

    if(!usuario) {
        return res.status(404).json(
            {error: "Usuário não encontrado."}
        )
    };

    const escalaIndex = escalas.findIndex(
        escala => 
            escala.acaoId === acaoId &&
        escala.usuarioId === usuarioId
    );          

    if(escalaIndex === -1) {
        return res.status(404).json(
            {error: "Voluntário não está escalado para a ação."}
        )
    };

    escalas.splice(escalaIndex, 1);

    res.status(200).json(
        {mensagem: "Voluntário removido da ação."}
    )
}