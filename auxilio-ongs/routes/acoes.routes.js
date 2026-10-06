import express from "express";

import {
    listarAcoes,
    buscarAcao,
    criarAcao,
    escalarVoluntario,
    listarVoluntarios,
    editarAcao,
    deletarVoluntario
} from "../controllers/acoes.controller.js";

const router = express.Router();

router.get("/", listarAcoes);

router.get("/:id", buscarAcao);

router.post("/", criarAcao);

router.post("/:id/voluntarios", escalarVoluntario);

router.get("/:id/voluntarios", listarVoluntarios);

router.patch("/:id", editarAcao);

router.delete("/:id/voluntarios", deletarVoluntario);

export default router;