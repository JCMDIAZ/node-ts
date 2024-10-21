import { Request, Response, Router } from "express";
import { getItemsCentrosFormacion, getItemsCentrosFormacionList } from "../controllers/centrosformacion";
import { authMiddleware } from "../middleware/sessions";

const router = Router();

router.get("/",authMiddleware,getItemsCentrosFormacion);

router.get("/list/:id_generacion",authMiddleware,getItemsCentrosFormacionList);

export { router };