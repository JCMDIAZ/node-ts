import { Request, Response, NextFunction} from "express";
import { handleHttpError } from "../utils/handleError";
import { verifyToken } from "../utils/handleJwt";
//import UsersModel from "../models/nosql/users";
import UsersModel from "../models/mysql/users";
import { getProperties } from "../utils/handlePropertiesEngine";
import { User, RequestExt } from "../interface/users.interface";
const propertiesKey = getProperties();

const authMiddleware = async (req:RequestExt, res:Response, next:NextFunction) => {
    try {
        if(!req.headers.authorization){
            handleHttpError(res, "NEED_SESSION", 401);
            return
        }

        const token:string = <string>req.headers.authorization.split(' ').pop();
        const dataToken:any = await verifyToken(token);

        if(!dataToken){
            handleHttpError(res, "NOT_PAYLOAD_DATA", 401);
            return
        }

        const query = {
            [propertiesKey.id]: <string>dataToken['id']
        };

        const user:User = await <User><unknown>UsersModel.findOne(query); // Uso para ambos
        user.password = '';
        req.user = user;

        next();
    } catch (e) {
        handleHttpError(res, "NOT_SESSION", 401)
    }
}

export { authMiddleware };