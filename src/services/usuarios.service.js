import * as model from "../models/usuarioes.model";
import { ErroDeValidacao } from '../errors.js';
import { formatarUsuario } from '../utils/formatadores.js';

const tipos_permitidos = ['DOADOR', 'VOLUNTARIO', 'ADMIN'];

async function obterOuFalhar(id) {
  const usuario = await model.buscarPorId(id);
  if (!usuario) {
    throw new ErroNaoEncontrado('Usuário não encontrado.');
  }
  return usuario;
}

export async function listar() {
    const documentos = await colecaoAcoes().find().toArray();
    return documentos.map(formatado);
}

export async function criar({ nome, email, tipo } = {}) {
  if (typeof nome !== 'string' || typeof email !== 'string' || typeof tipo !== 'string'
      || !nome.trim() || !email.trim() || !tipo.trim()) {
    throw new ErroDeValidacao('Nome, email e tipo são obrigatórios.');
  }

  if (!tipos_permitidos.includes(tipo)) {
    throw new ErroDeValidacao('Tipo de usuário inválido.');
  }

  const novoUsuario = { nome: nome.trim(), email: email.trim().toLowerCase(), tipo };
  const idInserido = await model.inserir(novoUsuario);
  return formatarUsuario({ _id: idInserido, ...novoUsuario });
}


export async function editar(id, { nome, email, tipo } = {}) {
  const usuario = await obterOuFalhar(id);
  const campos = {};

  if (nome !== undefined) {
    if (typeof nome !== 'string' || !nome.trim()) {
      throw new ErroDeValidacao('O nome deve ser um texto não vazio.');
    }
    campos.nome = nome.trim();
  }

  if (email !== undefined) {
    if (typeof email !== 'string' || !email.trim()) {
      throw new ErroDeValidacao('O email deve ser um texto não vazio.');
    }
    campos.email = email.trim().toLowerCase();
  }

  if (tipo !== undefined) {
    if (!TIPOS_PERMITIDOS.includes(tipo)) {
      throw new ErroDeValidacao('Tipo de usuário inválido.');
    }
    // Um voluntário escalado em ações não pode deixar de ser voluntário.
    if (usuario.tipo === 'VOLUNTARIO' && tipo !== 'VOLUNTARIO') {
      const escalas = await escalasModel.contarPorUsuario(usuario._id.toHexString());
      if (escalas > 0) {
        throw new ErroDeValidacao(
          'Este voluntário está escalado em ações. Remova-o delas antes de mudar o tipo.',
        );
      }
    }
    campos.tipo = tipo;
  }

  if (Object.keys(campos).length === 0) {
    throw new ErroDeValidacao('Informe ao menos um campo para editar (nome, email ou tipo).');
  }

  // Se o email já existir em outro usuário, o índice único gera erro 11000 (tratado como 409).
  await model.atualizar(usuario._id, campos);
  return formatarUsuario({ ...usuario, ...campos });
}

export async function deletar(id) {
  const usuario = await obterOuFalhar(id);

  await model.remover(usuario._id);
}