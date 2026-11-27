import * as doacaoModel from "../models/doacoes.model.js";
import * as campanhaModel from "../models/campanhas.model.js"
import * as usuarioModel from "../models/usuarioes.model.js"
import { ErroDeValidacao, ErroNaoEncontrado } from '../errors.js';
import { formatarDoacao } from '../utils/formatadores.js';

export async function listar() {
  const documentos = await doacoesModel.buscarTodas();
  return documentos.map(formatarDoacao);
}

export async function criar({ campanhaId, usuarioId, valor, anonima = false }) {
  
    if (!campanhaId) {
          return res.status(400).json(
              {error: "O ID da campanha é obrigatorio."}
          );
      }
  
      if(!valor || valor <= 0) {
          return res.status(400).json(
              {error: "O valor da doação deve ser maior que zero."}
          );
      }
  
      const campanha = await campanhaModel.buscarPorId(campanhaId);
  
      if(!campanha) {
          return res.status(404).json(
              {error: "Campanha não encontrada."}
          )
      }
  
      const usuario = await usuarioModel.buscarPorId(usuarioId);
  
      if(!usuario) {
          return res.status(404).json(
              {error: "Usuário não encontrado."}
          )
      };
  
      if(usuario.tipo !== "DOADOR") {
          return res.status(400).json(
              {error: "Apenas um usuário DOADOR pode realizar doações."}
          )
      };

  const novaDoacao = {
          campanhaId: Number(campanhaId),
          usuarioId: Number(usuarioId),
          valor,
          anonima
      };

      campanha.arrecadado += valor;

  try{
      const idInserido = await model.inserir(novaDoacao);

      await campanhaModel.atualizar(campanhaId, {
        arrecadado: (campanha.arrecadado || 0) + valor
      });

      return {
        _id: idInserido,
        ...novaDoacao
      };
  }catch(error) {
    throw new Error("Erro ao inserir a doação ou atualizar a campanha.");
  }
}
