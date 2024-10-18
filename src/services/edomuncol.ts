import EstadosModel from "../models/mysql/estados";
import MunicipiosModel from '../models/mysql/municipios';
import AsentamientosModel from "../models/mysql/asentamientos";

const getEstados = async () => {
    const responseEstados = await EstadosModel.sequelize?.query('SELECT DISTINCT c_estado, d_estado FROM edomuncol');
    return responseEstados?.[0];
}

const getMunicipios = async (c_estado: string) => {
    const responseMunicipios = await MunicipiosModel.sequelize?.query(
        'SELECT DISTINCT c_munpio, d_munpio FROM edomuncol WHERE c_estado = :c_estado ORDER BY d_munpio', 
        {
            replacements: {
                c_estado: c_estado,
            }
        }
    );
    return responseMunicipios?.[0];
}

const getAsentamientos = async (c_estado: string, c_municipio: string) => {
    const responseMunicipios = await AsentamientosModel.sequelize?.query(
        'SELECT DISTINCT c_asenta, d_asenta FROM edomuncol WHERE c_estado = :c_estado AND c_munpio = :c_munpio ORDER BY d_asenta', 
        {
            replacements: {
                c_estado: c_estado,
                c_munpio: c_municipio,
            }
        }
    );
    return responseMunicipios?.[0];
}

export { getEstados, getMunicipios, getAsentamientos };