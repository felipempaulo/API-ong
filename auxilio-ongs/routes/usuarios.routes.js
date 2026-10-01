import express from "express";

import {
    criarUsuario
} from "../controllers/usuarios.controller.js";

const router = express.Router();

router.post("/", criarUsuario);

export default router;