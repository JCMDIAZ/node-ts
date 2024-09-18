import { Request, Response } from "express"
import { matchedData }  from "express-validator";
import { handleHttpError } from "../utils/handleError";
import { deleteTrack, getTrack, getTracks, insertTracks, updateTrack } from "../services/tracks";
import { RequestExt, User } from "../interface/users.interface";

/**
 * Traer un listado
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async ({ user }: RequestExt, res: Response) => {
    try{
        const responseTracks = await getTracks();
        res.send({ responseTracks, user });
    } catch(e) {
        handleHttpError(res,"ERROR_GET_ITEMS");
    };
};

/**
 * Traer un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async ({ params, user }: RequestExt, res: Response) => {
    try {
        const { id } = params;
        const responseTrack = await getTrack(id);
        res.send({ responseTrack, user });
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
        const responseTrack = await insertTracks(body);
        res.send({ responseTrack, user });
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
        const responseTrack = await updateTrack(id, body);
        res.send({ responseTrack, user });
    } catch(e) {
        handleHttpError(res,"ERROR_UPDATE_ITEMS");
    };
};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async ({ params, user }: RequestExt, res: Response) => {
    try {
        const { id } = params;
        const responseTrack = await deleteTrack(id);
        res.send({ responseTrack, user });
    } catch (e) {
        handleHttpError(res,"ERROR_DELETE_ITEM");
    }
};


export { getItems, getItem, createItem, updateItem, deleteItem }