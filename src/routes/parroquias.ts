import { Request, Response, Router } from "express";
import { getItemsParroquias, getItemsListParroquias } from "../controllers/parroquias";
import { authMiddleware } from "../middleware/sessions";

const router = Router();

router.get("/",authMiddleware,getItemsParroquias);

router.get("/list",authMiddleware,getItemsListParroquias);

export { router }