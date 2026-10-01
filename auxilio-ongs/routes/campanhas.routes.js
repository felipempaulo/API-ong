import express from 'express';

import {
    listarCampanhas,
    buscarCampanha,
    criarCampanha
} from "../controllers/campanhas.controller.js"

const router = express.Router();

router.get("/", listarCampanhas);

router.get("/:id", buscarCampanha);

router.post("/", criarCampanha);

export default router;