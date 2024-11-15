import { Request, Response } from "express"
import { handleHttpError } from "../utils/handleError";
import { getDatosEstadoCicvilBy, insertDatosEstadoCicvil, updateDatosEstadoCivil } from "../services/datos_estadocivil";
import { RequestExt, User } from "../interface/users.interface";

/**
 * Traer un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async ({ params, user }: RequestExt, res: Response) => {
    try {
        const { id_registro } = params;
        const responseDatosEstadoCivil = await getDatosEstadoCicvilBy(parseInt(id_registro));
        res.send({ responseDatosEstadoCivil, user });
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
        const responseDatosEstadoCivil = await insertDatosEstadoCicvil(body);
        res.send({ responseDatosEstadoCivil, user });
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
        const responseDatosEstadoCivil = await updateDatosEstadoCivil(id, body);
        res.send({ responseDatosEstadoCivil, user });
    } catch(e) {
        handleHttpError(res,"ERROR_UPDATE_ITEMS");
    };
};

export { getItem, createItem, updateItem }