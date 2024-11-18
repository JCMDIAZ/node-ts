import { Request, Response } from "express"
import { handleHttpError } from "../utils/handleError";
import { getDatosEscolaridadBy, insertDatosEscolaridad, updateDatosEscolaridad } from "../services/datos_escolaridad";
import { RequestExt, User } from "../interface/users.interface";


/**
 * Traer un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async ({ params, user }: RequestExt, res: Response) => {
    try {
        const { id_registro } = params;
        const responseDatosEscolaridad = await getDatosEscolaridadBy(parseInt(id_registro));
        res.send({ responseDatosEscolaridad, user });
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
        const responseDatosEscolaridad = await insertDatosEscolaridad(body);
        res.send({ responseDatosEscolaridad, user });
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
        const responseDatosEscolaridad = await updateDatosEscolaridad(id, body);
        res.send({ responseDatosEscolaridad, user });
    } catch(e) {
        handleHttpError(res,"ERROR_UPDATE_ITEMS");
    };
};

export { getItem, createItem, updateItem }