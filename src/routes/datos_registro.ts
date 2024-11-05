import { Request, Response, Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/sessions";
import { validatorDatosRegistro } from "../validators/datos_registro";
import { getItem, createItem, updateItem }  from "../controllers/datos_registro";

router.get("/:id/:matricula/:curp", authMiddleware, getItem );

router.post("/", authMiddleware, validatorDatosRegistro, createItem);

router.put("/:id", authMiddleware, validatorDatosRegistro, updateItem );

export { router };