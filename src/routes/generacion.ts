import { Request, Response, Router } from "express";
import { getItemsListGeneraciones, getItemsGeneraciones } from "../controllers/generacion";
import { authMiddleware } from "../middleware/sessions";

const router = Router();

router.get("/list",authMiddleware,getItemsListGeneraciones);

router.get("/",authMiddleware,getItemsGeneraciones);

export { router }