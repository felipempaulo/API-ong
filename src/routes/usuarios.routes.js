import express from 'express';
import { 
    listarUsuarios, 
    criarUsuario ,
    editarUsuario,
    buscarUsuario,
    deletarUsuario
} from '../controllers/usuarios.controller.js';

const router = express.Router();

router.get('/', listarUsuarios);
router.get('/:id', buscarUsuario);
router.post('/', criarUsuario);
router.patch('/:id', editarUsuario);
router.delete('/:id', deletarUsuario);

export default router;