import ListGeneracionModel from "../models/mysql/generacionlist";
import GeneracionModel from "../models/mysql/generacion";

const getListGeneraciones = async () => {
    const responseListGeneraciones = await ListGeneracionModel.sequelize?.query('SELECT id, nombre_generacion FROM generacion');
    return responseListGeneraciones?.[0];
}

const getGeneraciones = async () => {
    const responseGeneraciones = await GeneracionModel.findAll();
    return responseGeneraciones;
}

export { getListGeneraciones, getGeneraciones };