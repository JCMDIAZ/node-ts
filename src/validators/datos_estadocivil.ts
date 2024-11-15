import { Request, Response, NextFunction } from "express";
import { check } from "express-validator";
import { validateResults } from "../utils/handleValidator";

const validatorDatosEstadoCivil = [
    check("id_registro")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("id_estadocivil")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("conyuge_nombres")
    .isLength({min:3,max:150}),
    check("conyuge_primerapellido")
    .isLength({min:3,max:50}),
    check("conyuge_segundoapellido")
    .isLength({min:3,max:50}),        
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorDatosEstadoCivil }