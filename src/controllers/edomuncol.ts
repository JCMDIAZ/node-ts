import { Response } from "express";
import { getEstados, getMunicipios, getAsentamientos } from "../services/edomuncol";
import { RequestExt } from "../interface/users.interface";
import { handleHttpError } from "../utils/handleError";

/**
 * 
 * @param {*} req
 * @param {*} res 
 */
const getItemsEstados = async ({ user }: RequestExt, res: Response) => {
    try{
        const responseEstados = await getEstados();
        res.send({ responseEstados, user });
    } catch(e) {
        handleHttpError(res,"ERROR_GET_ITEMS");
    }
};

/**
 * 
 * @param {*} req
 * @param {*} res 
 */
const getItemsMunicipios = async ({ params, user }: RequestExt, res: Response) => {
    try{
        const { c_estado } = params;
        console.log(c_estado);
        const responseMunicipios = await getMunicipios(c_estado);
        res.send({ responseMunicipios, user });
    } catch(e) {
        handleHttpError(res,"ERROR_GET_ITEMS");
    }
};

/**
 * 
 * @param {*} req
 * @param {*} res 
 */
const getItemsAsentamientos = async ({ params, user }: RequestExt, res: Response) => {
    try{
        const { c_estado, c_munpio } = params;
        const responseAsentamientos = await getAsentamientos(c_estado, c_munpio);
        res.send({ responseAsentamientos, user });
    } catch(e) {
        handleHttpError(res,"ERROR_GET_ITEMS");
    }
};

export { getItemsEstados, getItemsMunicipios, getItemsAsentamientos };