import { Request, Response } from "express"
import { handleHttpError } from "../utils/handleError";
import { getDatosEspiritualidadBy, insertDatosEspiritualidad, updateDatosEspiritualidad } from "../services/datos_espiritualidad";
import { RequestExt, User } from "../interface/users.interface";

/**
 * Traer un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async ({ params, user }: RequestExt, res: Response) => {
    try {
        const { id_registro } = params;
        const responseDatosEspiritualidad = await getDatosEspiritualidadBy(parseInt(id_registro));
        res.send({ responseDatosEspiritualidad, user });
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
        const responseDatosEspiritualidad = await insertDatosEspiritualidad(body);
        res.send({ responseDatosEspiritualidad, user });
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
        const responseDatosEspiritualidad = await updateDatosEspiritualidad(id, body);
        res.send({ responseDatosEspiritualidad, user });
    } catch(e) {
        handleHttpError(res,"ERROR_UPDATE_ITEMS");
    };
};

export { getItem, createItem, updateItem }