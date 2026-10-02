import express from "express";

import {
    listarAcoes,
    buscarAcao,
    criarAcao,
    escalarVoluntario,
    listarVoluntarios,
    deletarAcao
} from "../controllers/acoes.controller.js";

const router = express.Router();

router.get("/", listarAcoes);

router.get("/:id", buscarAcao);

router.post("/", criarAcao);

router.post("/:id/voluntarios", escalarVoluntario);

router.get("/:id/voluntarios", listarVoluntarios);

router.delete("/:id", deletarAcao);

export default router;