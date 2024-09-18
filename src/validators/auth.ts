import {Request, Response, NextFunction} from "express";
import { check, validationResult } from "express-validator";
import { validateResults } from "../utils/handleValidator";

const validatorRegister = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("age")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

const validatorLogin = [
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorRegister, validatorLogin };