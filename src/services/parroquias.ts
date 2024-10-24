import ParroquiasModel from "../models/mysql/parroquias";
import ParroquiasListModel from "../models/mysql/parroquiaslist"; 

const getParroquias = async() => {
    const responseParroquias = await ParroquiasModel.findAll();
    return responseParroquias;
}

const getParroquiasList = async() => {
    const responseParroquiasList = await ParroquiasListModel.sequelize?.query('SELECT id, nombre, municipio FROM parroquias');
    return responseParroquiasList?.[0];
}

export { getParroquias, getParroquiasList };