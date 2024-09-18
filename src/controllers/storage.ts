import { Response } from "express";
import { RequestExt } from "../interface/users.interface";
import { Storage } from "../interface/storage.interface";
import { registerUpload, getStorages, getStorage, deleteStorage } from "../services/storage";
import { handleHttpError } from "../utils/handleError";

const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Traer un listado
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async ({ user }:RequestExt, res:Response) => {
    try{
        const data = await getStorages();
        res.send({data, user});
    } catch(e) {
        handleHttpError(res,"ERROR_LIST_ITEMS");
    };
};

/**
 * Traer un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async ({ params, user }: RequestExt, res: Response) => {
    try{
        const { id } = params;
        const data = await getStorage(id);
        res.send({data, user});
    } catch(e) {
        handleHttpError(res,"ERROR_DETAIL_ITEM");
    };
};

/**
 * Crear un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async ({ user, file }:RequestExt, res:Response) => {
    try {
        const fileData:Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.name}`,
            url: `${PUBLIC_URL}/${file?.filename}`
        };
        const data = await registerUpload(fileData);
        res.send({data, user});
    } catch (e) {
        handleHttpError(res,"ERROR_CREATE_ITEM");
    }
};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async ({ params, user }: RequestExt, res: Response) => {
    try{
        const { id } = params;
        const data = await deleteStorage(id);

        res.send({data, user});
    } catch(e) {
        handleHttpError(res,"ERROR_DELETE_ITEM");
    };
};


export { getItems, getItem, createItem, deleteItem }