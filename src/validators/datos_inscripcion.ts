import { Request, Response, NextFunction } from "express";
import { check } from "express-validator";
import { validateResults } from "../utils/handleValidator";

const validatorDatosInscripcion = [
    check("id_registro")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("id_generacion")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("id_parroquia_envio")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("parrocoenvio_nombre")
    .exists()
    .notEmpty()
    .isLength({min:3, max:250}),
    check("parrocoenvio_proceso")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("id_centroformativo")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("id_ministerio")
    .exists()
    .notEmpty()
    .isNumeric(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorDatosInscripcion }