import * as service from '../services/doacoes.service.js';
import { comTratamento } from '../utils/tratamento.js';

export const listarDoacoes = comTratamento('Erro interno ao listar as doações.', async (req, res) => {
  res.status(200).json(await service.listar());
});

export const criarDoacao = comTratamento('Erro interno ao criar a doação.', async (req, res) => {
  res.status(201).json(await service.criar(req.body ?? {}));
});
