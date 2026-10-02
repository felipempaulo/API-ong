import { campanhas } from "../data/database.js";

export function listarCampanhas(req, res) {
    res.status(200).json(campanhas);
}

export function buscarCampanha(req, res) {
    const id = Number(req.params.id);

    const campanha = campanhas.find(
        campanha => campanha.id === id
    );

    if(!campanha) {
        return res.status(404).json(
            {error: "Campanha não encontrada."}
        );
    }

    const faltam = Math.max(
        campanha.meta - campanha.arrecadado,
        0
    );

    const metaAlcançada = campanha.arrecadado >= campanha.meta


    res.status(200).json(
        {...campanha,
            faltam,
            mensagem: metaAlcançada
                ? "Meta alcançada!"
                : `Faltam R$ ${faltam.toFixed(2)} para atingir a meta.`
        }
    );
}

export function criarCampanha(req, res) {
    const {titulo, meta, objetivo } = req.body;

    if(!titulo) {
    return res.status(400).json(
        {error: 'O campo de título é obrigatório.'}
    );
   }

   if(!meta || meta <= 0) {
    return res.status(400).json(
        {error: 'O campo de meta é obrigatório e deve ser maior que zero.'}
    )
   }

   if(!objetivo) {
    return res.status(400).json(
        {error: 'O campo de objetivo é obrigatório.'}
    )
   }

   const campanhaCriada = {
    id: campanhas.length +1,
    titulo,
    meta,
    objetivo,
    arrecadado: 0
   };

   campanhas.push(campanhaCriada);

   res.status(201).json(campanhaCriada);
}