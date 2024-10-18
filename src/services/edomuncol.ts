import { sql } from "@sequelize/core";
import { Estados, Municipios, Asentamientos } from "../interface/edomuncol.interface";
import EstadosModel from "../models/mysql/estados";
import MunicipiosModel from '../models/mysql/municipios';
import AsentamientosModel from "models/mysql/asentamientos";

const getEstados = async () => {
    const responseEstados = await EstadosModel.sequelize?.query('SELECT DISTINCT c_estado, d_estado FROM edomuncol');
    return responseEstados
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
    return responseMunicipios
}

const getAsentamientos = async (c_estado: string, c_municipio: string) => {
    const responseMunicipios = await MunicipiosModel.sequelize?.query(
        'SELECT DISTINCT c_asenta, d_asenta FROM edomuncol WHERE c_estado = :c_estado AND c_munpio = :c_munpio ORDER BY d_asenta', 
        {
            replacements: {
                c_estado: c_estado,
                c_munpio: c_municipio,
            }
        }
    );
    return responseMunicipios
}

export { getEstados, getMunicipios, getAsentamientos };