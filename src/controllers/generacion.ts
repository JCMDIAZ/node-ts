import { Response } from "express";
import { getListGeneraciones, getGeneraciones } from "../services/generacion";
import { RequestExt } from "../interface/users.interface";
import { handleHttpError } from "../utils/handleError";

/**
 * 
 * @param {*} req
 * @param {*} res 
 */
const getItemsListGeneraciones = async ({ user }: RequestExt, res: Response) => {
    try{
        const responseListGeneraciones = await getListGeneraciones();
        res.send({ responseListGeneraciones, user });
    } catch(e) {
        handleHttpError(res,"ERROR_GET_ITEMS");
    }
};

/**
 * 
 * @param {*} req
 * @param {*} res 
 */
const getItemsGeneraciones = async ({ user }: RequestExt, res: Response) => {
    try{
        const responseGeneraciones = await getGeneraciones();
        res.send({ responseGeneraciones, user });
    } catch(e) {
        handleHttpError(res,"ERROR_GET_ITEMS");
    }
};

export { getItemsListGeneraciones, getItemsGeneraciones }