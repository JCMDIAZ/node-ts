import { Request, Response, Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/sessions";
import { validatorDatosInscripcion } from "../validators/datos_inscripcion";
import { getItem, createItem, updateItem, nextNL }  from "../controllers/datos_inscripcion";

router.get("/:id_registro", authMiddleware, getItem );

router.get("/numerolista/:id_generacion/:id_centroformativo", authMiddleware, nextNL );

router.post("/", authMiddleware, validatorDatosInscripcion, createItem);

router.put("/:id", authMiddleware, validatorDatosInscripcion, updateItem );

export { router };