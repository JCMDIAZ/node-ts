import {Request, Response, NextFunction} from "express";
import { check, validationResult } from "express-validator";
import { validateResults } from "../utils/handleValidator";

const validatorGetItemCatalogos = [
    check("grupo")
    .exists()
    .notEmpty(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorGetItemCatalogos };