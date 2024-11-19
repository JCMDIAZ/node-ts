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
    check("labora_nombreempresa")
    .exists(),
    check("labora_ocupacionoficio")
    .exists(),
    check("labora_domicilio")
    .exists(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorDatosLaboral }