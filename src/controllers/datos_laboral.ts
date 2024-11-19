import { Request, Response } from "express"
import { handleHttpError } from "../utils/handleError";
import { getDatosLaboralBy, insertDatosLaboral, updateDatosLaboral  } from "../services/datos_laboral";
import { RequestExt, User } from "../interface/users.interface";

/**
 * Traer un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async ({ params, user }: RequestExt, res: Response) => {
    try {
        const { id_registro } = params;
        const responseDatosLaboral = await getDatosLaboralBy(parseInt(id_registro));
        res.send({ responseDatosLaboral, user });
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
        const responseDatosLaboral = await insertDatosLaboral(body);
        res.send({ responseDatosLaboral, user });
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
        const responseDatosLaboral = await updateDatosLaboral(id, body);
        res.send({ responseDatosLaboral, user });
    } catch(e) {
        handleHttpError(res,"ERROR_UPDATE_ITEMS");
    };
};

export { getItem, createItem, updateItem }