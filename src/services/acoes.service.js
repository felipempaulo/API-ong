import * as modelAcao from '../models/acoes.model.js'
import * as campanhasModel from '../models/campanhas.model.js'
import * as usuariosModel from '../models/usuarios.model.js';
import * as escalasModel from '../models/escalas.model.js';
import { ErroDeValidacao, ErroNaoEncontrado } from '../errors.js';
import {
  formatarAcao, formatarCampanha, formatarUsuario, formatarEscala,
} from '../utils/formatadores.js';

async function obterAcaoOuFalhar(id) {
  const _id = exigirId(id, 'id da ação');
  const acao = await model.buscarPorId(_id);
  if (!acao) {
    throw new ErroNaoEncontrado('Ação não encontrada.');
  }
  return acao;
}

export async function listar() {
    const documentos = await colecaoAcoes().find().toArray();
    return documentos.map(formatado);
}

export async function buscar(id) {
    const acao = await obterAcaoOuFalhar(id);
    const campanha = await campanhasModel.buscarPorId(acao.campanhaId);
    return {
        ...formatarAcao(acao),
        campanha: campanha ? formatarCampanha(campanha) : null
    };
}

export async function criar({titulo, descricao, data, vagas}) {
    if (typeof titulo !== 'string' || typeof descricao !== 'string' 
        || typeof data !== 'string' || typeof vagas !== 'number') {
        throw new ErroDeValidacao('O título deve ser escrito.')
    }
    const novaAcao = {
        campanhaId: _campanhaId,
        titulo: titulo.trim(),
        descricao: descricao.trim(),
        data,
        vagas
    };
    const insertId = await module.inserir(novaAcao);
    return formatado({_id: insertId, ...novaAcao})
}

export async function editar(id, { titulo, descricao, data, vagas } = {}) {
  const acao = await obterAcaoOuFalhar(id);
  const campos = {};

  if (titulo !== undefined) {
    if (typeof titulo !== 'string' || !titulo.trim()) throw new ErroDeValidacao('Título inválido.');
    campos.titulo = titulo.trim();
  }
  if (descricao !== undefined) {
    if (typeof descricao !== 'string' || !descricao.trim()) throw new ErroDeValidacao('Descrição inválida.');
    campos.descricao = descricao.trim();
  }
  if (data !== undefined) {
    if (typeof data !== 'string' || !data.trim()) throw new ErroDeValidacao('Data inválida.');
    campos.data = data;
  }
  if (vagas !== undefined) {
    if (!vagasValidas(vagas)) throw new ErroDeValidacao('O número de vagas deve ser um inteiro maior que zero.');
    const ocupadas = await escalasModel.contarPorAcao(acao._id);
    if (vagas < ocupadas) {
      throw new ErroDeValidacao(`Já existem ${ocupadas} voluntários escalados; as vagas não podem ser menores que isso.`);
    }
    campos.vagas = vagas;
  }

  if (Object.keys(campos).length === 0) {
    throw new ErroDeValidacao('Informe ao menos um campo para editar.');
  }

  await model.atualizar(acao._id, campos);
  return formatarAcao({ ...acao, ...campos });
}

export async function deletar(id) {
  const acao = await obterAcaoOuFalhar(id);
  await escalasModel.removerPorAcao(acao._id);
  await model.remover(acao._id);
}

export async function escalarVoluntario(acaoId, { usuarioId } = {}) {
  const acao = await obterAcaoOuFalhar(acaoId);

  const _usuarioId = exigirId(usuarioId, 'id do usuário');
  const usuario = await usuariosModel.buscarPorId(_usuarioId);
  if (!usuario) {
    throw new ErroNaoEncontrado('Usuário não encontrado.');
  }
  if (usuario.tipo !== 'VOLUNTARIO') {
    throw new ErroDeValidacao('Apenas usuários voluntarios podem participar de ações.');
  }

  const jaEscalado = await escalasModel.buscarPorAcaoEUsuario(acao._id, _usuarioId);
  if (jaEscalado) {
    throw new ErroDeValidacao('Esse voluntário já está escalado para a ação.');
  }

  const ocupadas = await escalasModel.contarPorAcao(acao._id);
  if (ocupadas >= acao.vagas) {
    throw new ErroDeValidacao('Não há mais vagas para a ação.');
  }

  const novaEscala = { acaoId: acao._id, usuarioId: _usuarioId };
  const idInserido = await escalasModel.inserir(novaEscala);
  return formatarEscala({ _id: idInserido, ...novaEscala });
}

export async function listarVoluntarios(acaoId) {
  const acao = await obterAcaoOuFalhar(acaoId);
  const escalas = await escalasModel.buscarPorAcao(acao._id);
  if (escalas.length === 0) {
    return [];
  }
  const usuarios = await usuariosModel.buscarPorIds(escalas.map((e) => e.usuarioId));
  return usuarios.map(formatarUsuario);
}