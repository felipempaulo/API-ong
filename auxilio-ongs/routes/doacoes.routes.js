import express from "express";

import {
    listarDoacoes,
    criarDoacao
} from "../controllers/doacoes.controller";

const router = express.Router();

router.get("/", listarDoacoes);

router.post("/", criarDoacao);

export default router;