import { Response } from "express";
import { Catalogos } from "../interface/catalogos.interface";
import { getCatalogos, getCatalogosByGrupo } from "../services/catalogos";
import { RequestExt } from "../interface/users.interface";
import { handleHttpError } from "../utils/handleError";

/**
 * 
 * @param {*} req
 * @param {*} res 
 */
const getItemsCatalogos = async ({ user }: RequestExt, res: Response) => {
    try{
        const responseCatalogos = await getCatalogos();
        res.send({ responseCatalogos, user });
    } catch(e) {
        handleHttpError(res,"ERROR_GET_ITEMS");
    }
};

/**
 * 
 * @param {*} req
 * @param {*} res 
 */
const getItemsCatalogosByGrupo = async ({ params, user }: RequestExt, res: Response) => {
    try{
        const { grupo } = params;
        const responseCatalogos = await getCatalogosByGrupo(grupo);
        res.send({ responseCatalogos, user });
    } catch(e) {
        handleHttpError(res,"ERROR_GET_ITEMS");
    }
};

export { getItemsCatalogos, getItemsCatalogosByGrupo }