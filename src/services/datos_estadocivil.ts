import DatosEstadoCivilModel from "../models/mysql/datos_estadocivil";
import { DatosEstadoCivil } from "../interface/datos_estadocivil";
import Response from 'express';

const getDatosEstadoCicvilBy = async (id_registro: number) => {
    const responseDatosEstadoCivil = await DatosEstadoCivilModel.sequelize?.query(
        "SELECT * FROM datos_estadocivil WHERE id_registro = :id_registro",
        {
            replacements: {
                id_registro: id_registro??0
            }
        });
    return responseDatosEstadoCivil?.[0]; 
}

const insertDatosEstadoCicvil = async (datos:DatosEstadoCivil) => {
    const responseInsertDatosEstadoCicvil = await DatosEstadoCivilModel.create(datos);
    return responseInsertDatosEstadoCicvil;
}

const updateDatosEstadoCivil = async (id: string, datos:DatosEstadoCivil) => {
    const responseUpdateDatosEstadoVicil = await DatosEstadoCivilModel.findOne({ where: { id: id.toString() }, rejectOnEmpty: true});
    responseUpdateDatosEstadoVicil.update( datos );
    return responseUpdateDatosEstadoVicil;
}

export { getDatosEstadoCicvilBy, insertDatosEstadoCicvil, updateDatosEstadoCivil }