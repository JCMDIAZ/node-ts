import { Request, Response } from "express"
import { handleHttpError } from "../utils/handleError";
import { getDatosHerramientasBy, insertDatosHerramientas, updateDatosHerramientas } from "../services/datos_herramientas";
import { RequestExt, User } from "../interface/users.interface";

/**
 * Traer un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async ({ params, user }: RequestExt, res: Response) => {
    try {
        const { id_registro } = params;
        const responseDatosHerramientas = await getDatosHerramientasBy(parseInt(id_registro));
        res.send({ responseDatosHerramientas, user });
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
        const responseDatosHerramientas = await insertDatosHerramientas(body);
        res.send({ responseDatosHerramientas, user });
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
        const responseDatosHerramientas = await updateDatosHerramientas(id, body);
        res.send({ responseDatosHerramientas, user });
    } catch(e) {
        handleHttpError(res,"ERROR_UPDATE_ITEMS");
    };
};

export { getItem, createItem, updateItem }