import * as service from '../services/campanhas.service.js';
import { comTratamento } from '../utils/tratamento.js';

export const listarCampanhas = comTratamento('Erro interno ao listar as campanhas.', async (req, res) => {
  res.status(200).json(await service.listar());
});

export const buscarCampanha = comTratamento('Erro interno ao buscar a campanha.', async (req, res) => {
  res.status(200).json(await service.buscar(req.params.id));
});

export const criarCampanha = comTratamento('Erro interno ao criar a campanha.', async (req, res) => {
  res.status(201).json(await service.criar(req.body ?? {}));
});

export const editarCampanha = comTratamento('Erro interno ao editar a campanha.', async (req, res) => {
  res.status(200).json(await service.editar(req.params.id, req.body ?? {}));
});

export const deletarCampanha = comTratamento('Erro interno ao deletar a campanha.', async (req, res) => {
  await service.deletar(req.params.id);
  res.status(200).json({ mensagem: 'Campanha deletada.' });
});
