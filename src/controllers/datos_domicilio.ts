import { Request, Response } from "express"
import { handleHttpError } from "../utils/handleError";
import { getDatosDomicilioBy, insertDatosDomicilio, updateDatosDomicilio } from "../services/datos_domicilio";
import { RequestExt, User } from "../interface/users.interface";

/**
 * Traer un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async ({ params, user }: RequestExt, res: Response) => {
    try {
        const { id_registro } = params;
        const responseDatosDomicilio = await getDatosDomicilioBy(parseInt(id_registro));
        res.send({ responseDatosDomicilio, user });
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
        const responseDatosDomicilio = await insertDatosDomicilio(body);
        res.send({ responseDatosDomicilio, user });
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
        const responseDatosDomicilio = await updateDatosDomicilio(id, body);
        res.send({ responseDatosDomicilio, user });
    } catch(e) {
        handleHttpError(res,"ERROR_UPDATE_ITEMS");
    };
};

export { getItem, createItem, updateItem }