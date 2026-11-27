import * as model from "../models/campanhas.model.js";
import * as acoesModel from '../models/acoes.model.js';
import * as escalasModel from '../models/escalas.model.js';
import { ErroDeValidacao, ErroNaoEncontrado } from '../errors.js';
import { formatarCampanha, formatarAcao } from '../utils/formatadores.js';

async function obterOuFalhar(id) {
  const campanha = await model.buscarPorId(id);   // o model já valida o formato
  if (!campanha) {
    throw new ErroNaoEncontrado('Campanha não encontrada.');
  }
  return campanha;
}

export async function listar() {
  const documentos = await model.buscarTodas();
  return documentos.map(formatarCampanha);
}

export async function buscar(id) {
  const campanha = await obterOuFalhar(id);
  const dados = formatarCampanha(campanha);

  const faltam = Math.max(dados.meta - dados.arrecadado, 0);
  const metaAlcancada = dados.arrecadado >= dados.meta;
  const acoes = await acoesModel.buscarPorCampanha(campanha._id);

  return {
    ...dados,
    faltam,
    mensagem: metaAlcancada
      ? 'Meta alcançada!'
      : `Faltam R$ ${faltam.toFixed(2)} para atingir a meta.`,
    acoes: acoes.map(formatarAcao),
  };
}

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
    titulo: titulo.trim(),
    meta: meta,
    objetivo: objetivo.trim(),
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

export async function editar(id, { titulo, meta, objetivo } = {}) {
  const campanha = await obterOuFalhar(id);
  const campos = {};

  if (titulo !== undefined) {
    if (typeof titulo !== 'string' || !titulo.trim()) {
      throw new ErroDeValidacao('O título deve ser um texto não vazio.');
    }
    campos.titulo = titulo.trim();
  }
  if (meta !== undefined) {
    if (typeof meta !== 'number' || !Number.isFinite(meta) || meta <= 0) {
      throw new ErroDeValidacao('A meta deve ser um número maior que zero.');
    }
    campos.meta = meta;
  }
  if (objetivo !== undefined) {
    if (typeof objetivo !== 'string' || !objetivo.trim()) {
      throw new ErroDeValidacao('O objetivo deve ser um texto não vazio.');
    }
    campos.objetivo = objetivo.trim();
  }

  if (Object.keys(campos).length === 0) {
    throw new ErroDeValidacao('Informe ao menos um campo para editar (titulo, meta ou objetivo).');
  }

  await model.atualizar(campanha._id, campos);
  return formatarCampanha({ ...campanha, ...campos });
}

export async function deletar(id) {
  const campanha = await obterOuFalhar(id);

  // Remove também as ações da campanha e as escalas dessas ações.
  const acoes = await acoesModel.buscarPorCampanha(campanha._id);
  for (const acao of acoes) {
    await escalasModel.removerPorAcao(acao._id);
    await acoesModel.remover(acao._id);
  }

  await model.remover(campanha._id);
}