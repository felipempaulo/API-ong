import * as service from '../services/usuarios.service.js';
import { comTratamento } from '../utils/tratamento.js';

export const listarUsuarios = comTratamento('Erro interno ao listar os usuários.', async (req, res) => {
  res.status(200).json(await service.listar());
});

export const buscarUsuario = comTratamento('Erro interno ao buscar o usuário.', async (req, res) => {
  res.status(200).json(await service.buscar(req.params.id));
});

export const criarUsuario = comTratamento('Erro interno ao criar o usuário.', async (req, res) => {
  res.status(201).json(await service.criar(req.body ?? {}));
});

export const editarUsuario = comTratamento('Erro interno ao editar o usuário.', async (req, res) => {
  res.status(200).json(await service.editar(req.params.id, req.body ?? {}));
});

export const deletarUsuario = comTratamento('Erro interno ao deletar o usuário.', async (req, res) => {
  await service.deletar(req.params.id);
  res.status(200).json({ mensagem: 'Usuário deletado.' });
});