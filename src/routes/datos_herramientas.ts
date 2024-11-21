import { Request, Response, Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/sessions";
import { validatorDatosHerramientas } from "../validators/datos_herramientas";
import { getItem, createItem, updateItem }  from "../controllers/datos_herramientas";

router.get("/:id_registro", authMiddleware, getItem );

router.post("/", authMiddleware, validatorDatosHerramientas, createItem);

router.put("/:id", authMiddleware, validatorDatosHerramientas, updateItem );

export { router };