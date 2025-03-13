import { Request, Response, NextFunction } from "express";
import { check } from "express-validator";
import { validateResults } from "../utils/handleValidator";

const validatorDatosHerramientas = [
    check("id_registro")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("dispositivo")
    .exists()
    .notEmpty()
    .isBoolean(),
    check("dispositivo_especifique")
    .exists(),
    check("servicios")
    .exists()
    .notEmpty()
    .isBoolean(),
    check("servicios_especifique")
    .exists(),
    check("problemas_tecnicos")
    .exists()
    .notEmpty()
    .isLength({min:0,max:500}),
    check("plataformas")
    .exists()
    .notEmpty()
    .isLength({min:0,max:500}),
    check("redes_sociales")
    .exists()
    .notEmpty()
    .isLength({min:0,max:500}),
    check("problemas_aplicaciones")
    .exists()
    .notEmpty()
    .isLength({min:0,max:500}),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorDatosHerramientas }