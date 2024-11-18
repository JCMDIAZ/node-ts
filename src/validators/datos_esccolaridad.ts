import { Request, Response, NextFunction } from "express";
import { check } from "express-validator";
import { validateResults } from "../utils/handleValidator";

const validatorDatosEscolaridad = [
    check("id_registro")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("gradoestudio")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("gradoestudio_estatus")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("gradoestudio_carrera")
    .isLength({min:3,max:250}),        
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorDatosEscolaridad }