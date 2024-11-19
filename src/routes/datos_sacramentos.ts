import { Request, Response, Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/sessions";
import { validatorDatosSacramentos } from "../validators/datos_sacramentos";
import { getItem, createItem, updateItem }  from "../controllers/datos_sacramentos";

router.get("/:id_registro", authMiddleware, getItem );

router.post("/", authMiddleware, validatorDatosSacramentos, createItem);

router.put("/:id", authMiddleware, validatorDatosSacramentos, updateItem );

export { router };