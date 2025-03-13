import { Request, Response, NextFunction } from "express";
import { check } from "express-validator";
import { validateResults } from "../utils/handleValidator";

const validatorDatosLaboral = [
    check("id_registro")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("labora_situacion")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("labora_ubicacion")
    .exists(),
    check("labora_tipohorario")
    .exists(),
    check("labora_diasdescanso")
    .exists(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorDatosLaboral }