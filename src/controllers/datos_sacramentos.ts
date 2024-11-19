import { Request, Response } from "express"
import { handleHttpError } from "../utils/handleError";
import { getDatosSacramentosBy, insertDatosSacramentos, updateDatosSacramentos } from "../services/datos_sacramentos";
import { RequestExt, User } from "../interface/users.interface";

/**
 * Traer un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async ({ params, user }: RequestExt, res: Response) => {
    try {
        const { id_registro } = params;
        const responseDatosSacramentos = await getDatosSacramentosBy(parseInt(id_registro));
        res.send({ responseDatosSacramentos, user });
    } catch (e) {
        handleHttpError(res,"ERROR_GET_ITEM");
    }
};

/**
 * Crear un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async ({ body, user }: RequestExt, res: Response) => {
    try{
        const responseDatosSacramentos = await insertDatosSacramentos(body);
        res.send({ responseDatosSacramentos, user });
    } catch(e) {
        console.log(e);
        handleHttpError(res,"ERROR_CREATE_ITEMS");
    };
};

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async ({ params, body, user }: RequestExt, res: Response) => {
    try{
        const { id } = params;
        const responseDatosSacramentos = await updateDatosSacramentos(id, body);
        res.send({ responseDatosSacramentos, user });
    } catch(e) {
        handleHttpError(res,"ERROR_UPDATE_ITEMS");
    };
};

export { getItem, createItem, updateItem }