import { Request, Response, Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/sessions";
import { validatorDatosDomicilio } from "../validators/datos_domicilio";
import { getItem, createItem, updateItem }  from "../controllers/datos_domicilio";

router.get("/:id_registro", authMiddleware, getItem );

router.post("/", authMiddleware, validatorDatosDomicilio, createItem);

router.put("/:id", authMiddleware, validatorDatosDomicilio, updateItem );

export { router };