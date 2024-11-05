import ParroquiasModel from "../models/mysql/parroquias";
import ParroquiasListModel from "../models/mysql/parroquiaslist"; 

const getParroquias = async() => {
    const responseParroquias = await ParroquiasModel.findAll();
    return responseParroquias;
}

const getParroquiasList = async() => {
    const responseParroquiasList = await ParroquiasListModel.sequelize?.query('SELECT p.id, CONCAT(c.valorStr, " ", p.nombre) AS nombre, p.municipio, responsable_nombre FROM parroquias p INNER JOIN catalogos c ON p.id_tipo = c.indice AND c.grupo = "tipoiglesia" ORDER BY nombre');
    return responseParroquiasList?.[0];
}

export { getParroquias, getParroquiasList };