import { Response } from "express";
import { getCentrosFormacion, getCentrosFormacionList } from "../services/centrosformacion";
import { RequestExt } from "../interface/users.interface";
import { handleHttpError } from "../utils/handleError";

/**
 * 
 * @param {*} req
 * @param {*} res 
 */
const getItemsCentrosFormacion = async ({ user }: RequestExt, res: Response) => {
    try{
        const responseCentrosFormacion = await getCentrosFormacion();
        res.send({ responseCentrosFormacion, user });
    } catch(e) {
        handleHttpError(res,"ERROR_GET_ITEMS");
    }
};

/**
 * 
 * @param {*} req
 * @param {*} res 
 */
const getItemsCentrosFormacionList = async ({ params, user }: RequestExt, res: Response) => {
    try{
        const { id_generacion } = params;
        const responseCentrosFormacionList = await getCentrosFormacionList(+id_generacion);
        res.send({ responseCentrosFormacionList, user });
    } catch(e) {
        handleHttpError(res,"ERROR_GET_ITEMS");
    }
};

export { getItemsCentrosFormacion, getItemsCentrosFormacionList }