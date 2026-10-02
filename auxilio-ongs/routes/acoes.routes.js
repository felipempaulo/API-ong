import express from "express";

import {
    listarAcoes,
    buscarAcao,
    criarAcao,
    escalarVoluntario,
    listarVoluntarios
} from "../controllers/acoes.controller.js";

const router = express.Router();

router.get("/", listarAcoes);

router.get("/:id", buscarAcao);

router.post("/", criarAcao);

router.post("/:id/voluntarios", escalarVoluntario);

router.get("/:id/voluntarios", listarVoluntarios);

export default router;