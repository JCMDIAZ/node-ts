import DatosDomicilioModel from "../models/mysql/datos_domicilio";
import { DatosDomicilio } from "../interface/datos_domicilio";
import Response from 'express';

const getDatosDomicilioBy = async (id_registro: number) => {
    const responseDatosDomicilio = await DatosDomicilioModel.sequelize?.query(
        "SELECT * FROM datos_domicilio WHERE id_registro = :id_registro",
        {
            replacements: {
                id_registro: id_registro??0
            }
        });
    return responseDatosDomicilio?.[0]; 
}

const insertDatosDomicilio = async (datos:DatosDomicilio) => {
    const responseInsertDatosDomicilio = await DatosDomicilioModel.create(datos);
    return responseInsertDatosDomicilio;
}

const updateDatosDomicilio = async (id: string, datos:DatosDomicilioModel) => {
    const responseInsertDatosDomicilio = await DatosDomicilioModel.findOne({ where: { id: id.toString() }, rejectOnEmpty: true});
    responseInsertDatosDomicilio.update( datos );
    return responseInsertDatosDomicilio;
}

export { getDatosDomicilioBy, insertDatosDomicilio, updateDatosDomicilio }