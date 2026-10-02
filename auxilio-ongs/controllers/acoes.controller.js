import { acoes, campanhas, usuarios } from '../data/database.js';

export function listarAcoes(req, res) {
    res.status(200).json(acoes);
}
