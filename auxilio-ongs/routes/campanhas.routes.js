import express from 'express';

import {
    listarCampanhas,
    buscarCampanha,
    criarCampanha,
    deletarCampanha
} from "../controllers/campanhas.controller.js"

const router = express.Router();

router.get("/", listarCampanhas);

router.get("/:id", buscarCampanha);

router.post("/", criarCampanha);

router.delete("/:id", deletarCampanha)

export default router;