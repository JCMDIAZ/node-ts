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
    .notEmpty()
    .isDate(),
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
    .isLength({min:20, max:20}),
    check("telefono")
    .exists()
    .notEmpty()
    .isLength({min:10, max:10}),
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
    .exists()
    .isLength({min:7, max:7}),
    check("estatusformacion")
    .exists()
    .isNumeric(),
    check("fechainstitucion")
    .exists()
    .isDate(),
    check("estatusministerio")
    .exists()
    .isNumeric(),
    check("fechadefusion")
    .exists()
    .isDate(),
    check("id_user")
    .exists()
    .isNumeric(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorDatosRegistro }