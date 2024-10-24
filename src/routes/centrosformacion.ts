import { Request, Response, Router } from "express";
import { getItemsCentrosFormacion, getItemsCentrosFormacionList } from "../controllers/centrosformacion";
import { validatorGetItemCentrosFormacion } from "../validators/centrosformacion";
import { authMiddleware } from "../middleware/sessions";

const router = Router();

router.get("/",authMiddleware,getItemsCentrosFormacion);

router.get("/list/:id_generacion",authMiddleware,validatorGetItemCentrosFormacion,getItemsCentrosFormacionList);

export { router };