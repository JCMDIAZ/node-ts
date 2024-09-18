import { Request, Response, Router }  from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";
import { validatorRegister, validatorLogin } from "../validators/auth";

const router = Router();

router.post("/register", validatorRegister, registerCtrl);

router.post("/login", validatorLogin, loginCtrl);

export { router };