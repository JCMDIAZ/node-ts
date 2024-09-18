import { Request, Response, NextFunction } from "express";
import { handleHttpError } from "../utils/handleError";

const customHeader = (req: Request, res: Response, next:NextFunction) => {
    //console.log(req.headers);
    //next();
    try{
        const apiKey = req.headers["x-api-key"];
        if(apiKey === 'leifer-01'){
            next();
        } else {
            handleHttpError(res,"API_KEY_NO_ES_CORRECTA");
        }
        //next();
    }catch(e){
        handleHttpError(res,"ALGO_OCURRIO_EN_EL_CUSTOM_HEADER");
    }
};

export { customHeader };