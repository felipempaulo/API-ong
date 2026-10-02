import express from "express";

import {
    listarAcoes,
    buscarAcao,
    criarAcao
} from "../controllers/acoes.controller.js";

const router = express.Router();

router.get("/", listarAcoes);

router.get("/:id", listarAcoes);

router.post("/", criarAcao);

export default router;