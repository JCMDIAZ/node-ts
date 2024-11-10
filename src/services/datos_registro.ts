import DatosRegistroModel from "../models/mysql/datos_registro";
import { DatosRegistro } from "../interface/datos_regitro";
import Response from 'express';

const getDatosRegistroBy = async (id: string|undefined, matricula: string|undefined, curp: string|undefined) => {
    const responseDatosRegistro = await DatosRegistroModel.sequelize?.query(
        "SELECT * FROM datos_registro WHERE id = :id OR matricula = :matricula OR curp = :curp",
        {
            replacements: {
                id: id??0,
                matricula: matricula??'',
                curp: curp??'',
            }
        });
    return responseDatosRegistro?.[0]; 
}

const insertDatosRegistro = async (datos:DatosRegistro) => {
    const responseInsertDatosRegistro = await DatosRegistroModel.create(datos);
    return responseInsertDatosRegistro
}

const updateDatosRegistro = async (id: string, datos:DatosRegistro) => {
    const responseUpdateDatosRegistro = await DatosRegistroModel.findOne({ where: { id: id.toString() }, rejectOnEmpty: true});
    responseUpdateDatosRegistro.update( datos );
    return responseUpdateDatosRegistro;
}

export { getDatosRegistroBy, insertDatosRegistro, updateDatosRegistro }