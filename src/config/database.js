import { MongoClient } from 'mongodb';

let client;
let db;

export async function conectar() {
  const uri = process.env.MONGODB_URI;
  const nomeDoBanco = process.env.MONGODB_DB_NAME;

  if (!uri || !nomeDoBanco) {
    throw new Error('Defina MONGODB_URI e MONGODB_DB_NAME no arquivo .env.');
  }

  client = new MongoClient(uri);
  await client.connect();
  db = client.db(nomeDoBanco);
  return db;
}

// Retorna a coleção "tarefas". Cada documento dela é uma tarefa.
export function colecaoDoacoes() {
  return db.collection('doacoes');
}

export function colecaoAcoes() {
  return db.collection('acoes');
}

export function colecaoCampanhas() {
    return db.collection('campanhas');
}

export function colecaoUsuarios() {
  return db.collection('usuarios')
}

export function obterBanco() {
  return db;
}

export async function desconectar() {
  if (client) {
    await client.close();
  }
}