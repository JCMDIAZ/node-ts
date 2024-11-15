import { Request, Response, Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/sessions";
import { validatorDatosEstadoCivil } from "../validators/datos_estadocivil";
import { getItem, createItem, updateItem }  from "../controllers/datos_estadocivil";

router.get("/:id_registro", authMiddleware, getItem );

router.post("/", authMiddleware, validatorDatosEstadoCivil, createItem);

router.put("/:id", authMiddleware, validatorDatosEstadoCivil, updateItem );

export { router };