import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth"
import { handleHttpError } from "../utils/handleError";

/**
 * 
 * Este controlador es el encargado de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async ({ body }:Request, res:Response) =>
    {
        try {
            const responseUser = await registerNewUser(body);
            if(responseUser==="ALREADY_USER") {
                handleHttpError(res, "ALREADY_USER", 402);    
            }
            else {
                res.send(responseUser);
            }
        } catch (e) {
            handleHttpError(res, "ERROR_REGISTER_USER");
        }
    };

/**
 * 
 * Este controlado es el encargado de loggear
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async ({ body }:Request, res:Response) =>
    {
        try {
            const {email, password} = body;
            const responseUser = await loginUser({email, password});
            if(responseUser==="NOT_FOUND_USER") {
                handleHttpError(res, "NOT_FOUND_USER", 404);    
            }
            else if(responseUser==="PASSWORD_INVALID") {
                handleHttpError(res, "PASSWORD_INVALID", 401);    
            }
            else {
                res.send(responseUser);
            }
        } catch (e) {
            console.log(e);
            handleHttpError(res, "ERROR_LOGIN_USER");
        }
    };

export { registerCtrl, loginCtrl };