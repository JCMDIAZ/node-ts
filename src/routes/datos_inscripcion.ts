import { Request, Response, Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/sessions";
import { validatorDatosInscripcion } from "../validators/datos_inscripcion";
import { getItem, createItem, updateItem }  from "../controllers/datos_inscripcion";

router.get("/:id_registro", authMiddleware, getItem );

router.post("/", authMiddleware, validatorDatosInscripcion, createItem);

router.put("/:id", authMiddleware, validatorDatosInscripcion, updateItem );

export { router };