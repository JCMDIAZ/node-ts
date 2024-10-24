import { Response } from "express";
import { getParroquias, getParroquiasList } from "../services/parroquias";
import { RequestExt } from "../interface/users.interface";
import { handleHttpError } from "../utils/handleError";

/**
 * 
 * @param {*} req
 * @param {*} res 
 */
const getItemsListParroquias = async ({ user }: RequestExt, res: Response) => {
    try{
        const responseListParroquias = await getParroquiasList();
        res.send({ responseListParroquias, user });
    } catch(e) {
        handleHttpError(res,"ERROR_GET_ITEMS");
    }
};

/**
 * 
 * @param {*} req
 * @param {*} res 
 */
const getItemsParroquias = async ({ user }: RequestExt, res: Response) => {
    try{
        const responseParroquias = await getParroquias();
        res.send({ responseParroquias, user });
    } catch(e) {
        handleHttpError(res,"ERROR_GET_ITEMS");
    }
};

export { getItemsListParroquias, getItemsParroquias}