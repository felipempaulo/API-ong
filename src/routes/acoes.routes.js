import express from 'express';
import {
  listarAcoes, 
  buscarAcao, 
  criarAcao, 
  editarAcao, 
  deletarAcao,
  escalarVoluntario, 
  listarVoluntarios, 
  deletarVoluntario,
} from '../controllers/acoes.controller.js';

const router = express.Router();

router.get('/', listarAcoes);
router.post('/', criarAcao);

router.get('/:id/voluntarios', listarVoluntarios);
router.post('/:id/voluntarios', escalarVoluntario);
router.delete('/:id/voluntarios/:usuarioId', deletarVoluntario);

router.get('/:id', buscarAcao);
router.patch('/:id', editarAcao);
router.delete('/:id', deletarAcao);

export default router;
