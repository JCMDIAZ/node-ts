import { Request, Response, NextFunction } from "express";
import { check } from "express-validator";
import { validateResults } from "../utils/handleValidator";

const validatorDatosSacramentos = [
    check("id_registro")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("bautizo")
    .exists()
    .notEmpty()
    .isBoolean(),
    check("bautizo_lugar")
    .exists(),
    check("bautizo_constancia")
    .exists(),
    check("confirmacion")
    .exists()
    .notEmpty()
    .isBoolean(),
    check("confirmacion_lugar")
    .exists(),
    check("confirmacion_constancia")
    .exists(),
    check("matrimonio")
    .exists()
    .notEmpty()
    .isBoolean(),
    check("matrimonio_lugar")
    .exists(),
    check("matrimonio_constancia")
    .exists(),
    check("periodicidad_reconciliacion")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("periodicidad_eucaristia")
    .exists()
    .notEmpty()
    .isNumeric(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorDatosSacramentos }