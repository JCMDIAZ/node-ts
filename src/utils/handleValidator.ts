import {Request, Response, NextFunction} from "express";
import { Result, ValidationError, validationResult } from "express-validator";

const validateResults= (req:Request, res:Response, next:NextFunction) => {
    try {
        validationResult(req).throw();
        return next();
    } catch(err:any|unknown) {
        res.status(403);
        res.send({ errors: err.array() })
    }
};

export { validateResults }