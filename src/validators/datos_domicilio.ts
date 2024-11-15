import { Request, Response, NextFunction } from "express";
import { check } from "express-validator";
import { validateResults } from "../utils/handleValidator";

const validatorDatosDomicilio = [
    check("id_registro")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("calle")
    .exists()
    .notEmpty()
    .isLength({min:3, max:250}),
    check("numeroexterior")
    .exists()
    .notEmpty()
    .isLength({min:1, max:10}),
    check("colonia")
    .exists()
    .notEmpty()
    .isLength({min:3, max:250}),
    check("municipio")
    .exists()
    .notEmpty()
    .isLength({min:3, max:150}),
    check("estado")
    .exists()
    .notEmpty()
    .isLength({min:3, max:50}),
    check("codigopostal")
    .exists()
    .notEmpty()
    .isLength({min:5, max:5}),
    check("vivecon")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("domicilioactual")
    .exists()
    .notEmpty()
    .isBoolean(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorDatosDomicilio }