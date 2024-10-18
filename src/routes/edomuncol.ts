import { Request, Response, Router } from "express";
import { getItemsEstados, getItemsMunicipios, getItemsAsentamientos } from "../controllers/edomuncol";
import { validatorGetItemMunicipios, validatorGetItemAsentamientos } from "../validators/edomuncol";
import { authMiddleware } from "../middleware/sessions";

const router = Router();

router.get("/estados",authMiddleware,getItemsEstados);

router.get("/municipios/:c_estado",authMiddleware,validatorGetItemMunicipios,getItemsMunicipios);

router.get("/asentamientos/:c_estado/:c_munpio",authMiddleware,validatorGetItemAsentamientos,getItemsAsentamientos);

export { router };