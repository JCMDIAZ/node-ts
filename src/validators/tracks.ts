import {Request, Response, NextFunction} from "express";
import { check } from "express-validator";
import { validateResults } from "../utils/handleValidator";

const validatorCreateItem = [
    check("name")
    .exists()
    .notEmpty(),
    //.length()
    check("album")
    .exists()
    .notEmpty(),
    check("cover")
    .exists()
    .notEmpty(),
    check("artist")
    .exists()
    .notEmpty(),
    check("artist.name")
    .exists()
    .notEmpty(),
    check("artist.nickname")
    .exists()
    .notEmpty(),
    check("artist.nationality")
    .exists()
    .notEmpty(),
    check("duration")
    .exists()
    .notEmpty(),
    check("duration.start")
    .exists()
    .notEmpty(),
    check("duration.end")
    .exists()
    .notEmpty(),
    check("mediaId")
    .exists()
    .notEmpty(),
    //.isMongoId(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty(),
    //.isMongoId(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export  { validatorCreateItem, validatorGetItem };