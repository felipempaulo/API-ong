import express from 'express';

import {
    listarCampanhas,
    buscarCampanha,
    criarCampanha,
    deletarCampanha,
    editarCampanha
} from "../controllers/campanhas.controller.js"

const router = express.Router();

router.get("/", listarCampanhas);

router.get("/:id", buscarCampanha);

router.post("/", criarCampanha);

router.delete("/:id", deletarCampanha)

router.patch("/:id", editarCampanha)

export default router;