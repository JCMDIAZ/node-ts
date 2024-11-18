import { Request, Response, Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/sessions";
import { validatorDatosEscolaridad } from "../validators/datos_esccolaridad";
import { getItem, createItem, updateItem }  from "../controllers/datos_escolaridad";

router.get("/:id_registro", authMiddleware, getItem );

router.post("/", authMiddleware, validatorDatosEscolaridad, createItem);

router.put("/:id", authMiddleware, validatorDatosEscolaridad, updateItem );

export { router };