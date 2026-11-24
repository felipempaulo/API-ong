import * as model from "../models/campanhas.model.js";

export async function criar({ titulo, meta, objetivo }) {
  if (!titulo) {
    return res.status(400).json({ error: "O campo de título é obrigatório." });
  }

  if (!meta || meta <= 0) {
    return res
      .status(400)
      .json({
        error: "O campo de meta é obrigatório e deve ser maior que zero.",
      });
  }

  if (!objetivo) {
    return res
      .status(400)
      .json({ error: "O campo de objetivo é obrigatório." });
  }

  const novaCampanha = {
    titulo: titulo,
    meta: meta,
    objetivo: objetivo,
    arrecadado: 0
  }

  try{
      const idInserido = await model.inserir(novaCampanha);

      const documentoCriado = {
        _id: idInserido,
        ...novaCampanha
      }

      return documentoCriado;
  }catch(error) {
    throw new Error("Erro ao inserir no banco.");
  }
}
