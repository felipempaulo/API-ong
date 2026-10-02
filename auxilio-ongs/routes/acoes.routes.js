import express from "express";

import {
    listarAcoes,
    buscarAcao,
    criarAcao,
    adicionarVoluntario,
    listarVoluntarios
} from "../controllers/acoes.controller.js";

const router = express.Router();

router.get("/", listarAcoes);

router.get("/:id", listarAcoes);

router.post("/", criarAcao);

router.post("/:id/voluntarios", adicionarVoluntario);

router.get("/:id/voluntarios", listarVoluntarios);

export default router;