import { Request, Response, Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/sessions";
import { validatorDatosEspiritualidad } from "../validators/datos_espiritualidad";
import { getItem, createItem, updateItem }  from "../controllers/datos_espiritualidad";

router.get("/:id_registro", authMiddleware, getItem );

router.post("/", authMiddleware, validatorDatosEspiritualidad, createItem);

router.put("/:id", authMiddleware, validatorDatosEspiritualidad, updateItem );

export { router };