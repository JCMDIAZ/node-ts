import { Request, Response } from "express"
import { matchedData }  from "express-validator";
import { handleHttpError } from "../utils/handleError";
import { getDatosRegistroBy, insertDatosRegistro, updateDatosRegistro } from "../services/datos_registro";
import { RequestExt, User } from "../interface/users.interface";

/**
 * Traer un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async ({ params, user }: RequestExt, res: Response) => {
    try {
        const { id, matricula, curp } = params;
        const responseDatosRegistro = await getDatosRegistroBy(id, matricula, curp);
        res.send({ responseDatosRegistro, user });
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
        const responseDatosRegistro = await insertDatosRegistro(body);
        res.send({ responseDatosRegistro, user });
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
        const responseDatosRegistro = await updateDatosRegistro(id, body);
        res.send({ responseDatosRegistro, user });
    } catch(e) {
        handleHttpError(res,"ERROR_UPDATE_ITEMS");
    };
};

export { getItem, createItem, updateItem }