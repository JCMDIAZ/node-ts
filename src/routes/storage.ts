import  express from "express";
const router = express.Router();
import { uploadMiddleware } from "../utils/handleStorage";
import { validatorGetItem } from "../validators/storage";
import { getItems, getItem, createItem, deleteItem } from "../controllers/storage";
import { authMiddleware } from "../middleware/sessions";

//TODO http://localhost/storage GET, POST, DELETE, PUT

router.get("/", authMiddleware, getItems);

router.get("/:id", authMiddleware, validatorGetItem, getItem);

router.post("/", authMiddleware, uploadMiddleware.single("myfile"), createItem);

router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

export { router };