import { handleHttpError } from "../utils/handleError";
import { Request, Response, NextFunction} from "express";
import { User, RequestExt } from "../interface/users.interface";

/**
 * Array con los roles permitidos
 * @param {*} rol 
 * @returns 
 */
const checkRol = (roles:string[]) => ({ user }:RequestExt, res:Response, next:NextFunction) => {
    try {
        const rolesByUser = user?.role;

        const checkValueRol = roles.some((rolSingle) => rolesByUser?.includes(rolSingle));
        if(!checkValueRol) {
            handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
            return;    
        }
        next();
    } catch (e) {
        handleHttpError(res, "ERROR_PERMISSIONS", 403);
    }
}

export { checkRol };