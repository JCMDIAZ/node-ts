import { Request, Response, Router } from "express";
const router = Router();

import { customHeader } from "../middleware/customHeader";
import { authMiddleware } from "../middleware/sessions";
import { validatorCreateItem, validatorGetItem } from "../validators/tracks";
import { getItems, getItem, createItem, updateItem, deleteItem }  from "../controllers/tracks";
import { checkRol } from "../middleware/rol";

//TODO http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", authMiddleware, getItems );

router.get("/:id", authMiddleware, validatorGetItem, getItem );

//router.post("/", validatorCreateItem, customHeader, createItem);
router.post("/", authMiddleware, checkRol(["user", "admin"]), validatorCreateItem, createItem);

router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem );

router.delete("/:id", authMiddleware, validatorGetItem, deleteItem );

export { router };