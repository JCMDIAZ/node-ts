import {Request, Response, NextFunction} from "express";
import { check } from "express-validator";
import { validateResults } from "../utils/handleValidator";

const validatorGetItemCentrosFormacion = [
    check("id")
    .exists()
    .notEmpty(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorGetItemCentrosFormacion };