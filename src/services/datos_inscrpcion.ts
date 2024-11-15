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

const nextNumeroLista = async (id_generacion: number, id_centroformativo: number) => {
    const responseDatosInscripcion = await DatosInscripcionModel.sequelize?.query(
        "SELECT (IFNULL(MAX(numero_lista),0) + 1) AS numero_lista FROM datos_inscripcion WHERE id_generacion = :id_generacion AND id_centroformativo = :id_centroformativo",
        {
            replacements: {
                id_generacion: id_generacion??0,
                id_centroformativo: id_centroformativo??0
            }
        });
    return responseDatosInscripcion?.[0]; 
}

const insertDatosInscripcion = async (datos:DatosInscripcion) => {
    const responseInsertDatosInscrpcion = await DatosInscripcionModel.create(datos);
    return responseInsertDatosInscrpcion;
}

const updateDatosInscripcion = async (id: string, datos:DatosInscripcion) => {
    const responseUpdateDatosInscripcion = await DatosInscripcionModel.findOne({ where: { id: id.toString() }, rejectOnEmpty: true});
    responseUpdateDatosInscripcion.update( datos );
    return responseUpdateDatosInscripcion;
}

export { getDatosInscripcionBy, insertDatosInscripcion, updateDatosInscripcion, nextNumeroLista }