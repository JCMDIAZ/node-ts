import DatosInscripcionModel from "../models/mysql/datos_inscripcion";
import { DatosInscripcion } from "../interface/datos_inscripcion";
import Response from 'express';

const getDatosInscripcionBy = async (id_registro: number) => {
    const responseDatosInscripcion = await DatosInscripcionModel.sequelize?.query(
        "SELECT * FROM datos_inscripcion WHERE id_registro = :id_registro",
        {
            replacements: {
                id_registro: id_registro??0
            }
        });
    return responseDatosInscripcion?.[0]; 
}

const insertDatosInscripcion = async (datos:DatosInscripcion) => {
    const responseInsertDatosInscrpcion = await DatosInscripcionModel.create(datos);
    return responseInsertDatosInscrpcion;
}

const updateDatosInscripcion = async (id: string, datos:DatosInscripcion) => {
    const responseUpdateDatosRegistro = await DatosInscripcionModel.findOne({ where: { id: id.toString() }, rejectOnEmpty: true});
    responseUpdateDatosRegistro.update( datos );
    return responseUpdateDatosRegistro;
}

export { getDatosInscripcionBy, insertDatosInscripcion, updateDatosInscripcion }