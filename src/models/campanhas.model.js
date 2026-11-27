import { ObjectId } from 'mongodb';
import { obterBanco } from '../config/database.js';

function colecao() {
  return obterBanco().collection('campanhas');
}

export async function buscarTodas() {
  return colecao().find().toArray();
}

export async function buscarPorId(id) {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  return colecao().findOne({ _id: new ObjectId(id) });
}

export async function inserir(campanha) {
  const resultado = await colecao().insertOne(campanha);
  return resultado.insertedId;
}

export async function atualizar(id, campos) {
  if (!ObjectId.isValid(id)) {
    return false;
  }
  const resultado = await colecao().updateOne({ _id: new ObjectId(id) }, { $set: campos });
  return resultado.matchedCount > 0;
}

export async function remover(id) {
  if (!ObjectId.isValid(id)) {
    return false;
  }
  const resultado = await colecao().deleteOne({ _id: new ObjectId(id) });
  return resultado.deletedCount > 0;
}

export async function incrementarArrecadado(id, valor) {
  if (!ObjectId.isValid(id)) {
    return false
  }
  const resultado = await colecao().updateOne(
    { _id: new ObjectId(id) },
    { $inc: {arrecadado: valor }}
  );
  return resultado.matchedCount > 0;
}