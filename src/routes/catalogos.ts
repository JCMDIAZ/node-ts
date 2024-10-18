import { Request, Response, Router } from "express";
import { getItemsCatalogos, getItemsCatalogosByGrupo } from "../controllers/catalogos";
import { validatorGetItemCatalogos } from "../validators/catalogos";
import { authMiddleware } from "../middleware/sessions";

const router = Router();

router.get("/", authMiddleware, getItemsCatalogos );

router.get("/:grupo", authMiddleware, validatorGetItemCatalogos, getItemsCatalogosByGrupo);

export { router };
