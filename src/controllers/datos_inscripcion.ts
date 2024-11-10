import { Request, Response } from "express"
import { handleHttpError } from "../utils/handleError";
import { getDatosInscripcionBy, insertDatosInscripcion, updateDatosInscripcion } from "../services/datos_inscrpcion";
import { RequestExt, User } from "../interface/users.interface";

/**
 * Traer un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async ({ params, user }: RequestExt, res: Response) => {
    try {
        const { id_registro } = params;
        const responseDatosInscripcion = await getDatosInscripcionBy(parseInt(id_registro));
        res.send({ responseDatosInscripcion, user });
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
        const responseDatosInscripcion = await insertDatosInscripcion(body);
        res.send({ responseDatosInscripcion, user });
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
        const responseDatosInscripcion = await updateDatosInscripcion(id, body);
        res.send({ responseDatosInscripcion, user });
    } catch(e) {
        handleHttpError(res,"ERROR_UPDATE_ITEMS");
    };
};

export { getItem, createItem, updateItem }