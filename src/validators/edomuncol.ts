import {Request, Response, NextFunction} from "express";
import { check, validationResult } from "express-validator";
import { validateResults } from "../utils/handleValidator";

const validatorGetItemMunicipios = [
    check("c_estado")
    .exists()
    .notEmpty(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

const validatorGetItemAsentamientos = [
    check("c_estado")
    .exists()
    .notEmpty(),
    check("c_munpio")
    .exists()
    .notEmpty(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorGetItemMunicipios, validatorGetItemAsentamientos };