import { Request, Response, Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/sessions";
import { validatorDatosLaboral } from "../validators/datos_laboral";
import { getItem, createItem, updateItem }  from "../controllers/datos_laboral";

router.get("/:id_registro", authMiddleware, getItem );

router.post("/", authMiddleware, validatorDatosLaboral, createItem);

router.put("/:id", authMiddleware, validatorDatosLaboral, updateItem );

export { router };