import * as service from '../services/acoes.service.js';
import { comTratamento } from '../utils/tratamento.js';

export const listarAcoes = comTratamento('Erro interno ao listar as ações.', async (req, res) => {
  res.status(200).json(await service.listar());
});

export const buscarAcao = comTratamento('Erro interno ao buscar a ação.', async (req, res) => {
  res.status(200).json(await service.buscar(req.params.id));
});

export const criarAcao = comTratamento('Erro interno ao criar a ação.', async (req, res) => {
  res.status(201).json(await service.criar(req.body ?? {}));
});

export const editarAcao = comTratamento('Erro interno ao editar a ação.', async (req, res) => {
  res.status(200).json(await service.editar(req.params.id, req.body ?? {}));
});

export const deletarAcao = comTratamento('Erro interno ao deletar a ação.', async (req, res) => {
  await service.deletar(req.params.id);
  res.status(200).json({ mensagem: 'Ação deletada.' });
});

export const escalarVoluntario = comTratamento('Erro interno ao escalar o voluntário.', async (req, res) => {
  res.status(201).json(await service.escalarVoluntario(req.params.id, req.body ?? {}));
});

export const listarVoluntarios = comTratamento('Erro interno ao listar os voluntários.', async (req, res) => {
  res.status(200).json(await service.listarVoluntarios(req.params.id));
});

export const deletarVoluntario = comTratamento('Erro interno ao remover o voluntário.', async (req, res) => {
  const usuarioId = req.params.usuarioId ?? req.body?.usuarioId;
  await service.removerVoluntario(req.params.id, usuarioId);
  res.status(200).json({ mensagem: 'Voluntário removido da ação.' });
});
