import { colecaoAcoes } from '../data/database.js'

export class ErroDeValidacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'ErroDeValidacao';
  }
}

function formatado(documento) {
    return {
        id: documento._id.toHexString(),
        campanhaId: documento.campanhaId,
        titulo: documento.titulo,
        descricao: documento.descricao,
        data: documento.data,
        vagas: documento.vagas
    }
}

export async function listar() {
    const documentos = await colecaoAcoes().find().toArray();
    return documentos;
}

export async function criar({titulo, descricao, data, vagas}) {
    if (typeof titulo !== 'string' || typeof descricao !== 'string' 
        || typeof data !== 'string' || typeof vagas !== 'number') {
        throw new ErroDeValidacao('O título deve ser escrito.')
    }
    const novaAcao = {titulo: titulo.trim(), concluida: false};
    const insertId = await module.inserir(novaAcao);
    return formatado({_id: insertId, ...novaAcao})
}