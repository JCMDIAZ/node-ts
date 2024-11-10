import {Request, Response, NextFunction} from "express";
import { check } from "express-validator";
import { validateResults } from "../utils/handleValidator";

const validatorDatosRegistro = [
    check("nombres")
    .exists()
    .notEmpty()
    .isLength({min:3, max:150}),
    check("primerapellido")
    .exists()
    .notEmpty()
    .isLength({min:3, max:50}),
    check("segundoapellido")
    .exists()
    .notEmpty()
    .isLength({min:3, max:50}),
    check("nacimiento_fecha")
    .exists()
    .notEmpty(),
    check("nacimiento_lugar")
    .exists()
    .notEmpty()
    .isLength({min:3, max:250}),
    check("sexo")
    .exists()
    .notEmpty()
    .isLength({min:1, max:1}),
    check("curp")
    .exists()
    .notEmpty()
    .isLength({min:18, max:18}),
    check("telefono")
    .exists()
    .notEmpty()
    .isLength({min:12, max:12}),
    check("mail")
    .exists()
    .notEmpty()
    .isLength({min:1, max:50}),
    check("codigovalidacion")
    .exists()
    .notEmpty()
    .isLength({min:6, max:6}),
    check("validado")
    .exists()
    .notEmpty()
    .isBoolean(),
    check("matricula")
    .exists(),
    check("estatusformacion")
    .exists()
    .isNumeric(),
    check("estatusministerio")
    .exists()
    .isNumeric(),
    check("id_user")
    .exists()
    .isNumeric(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorDatosRegistro }