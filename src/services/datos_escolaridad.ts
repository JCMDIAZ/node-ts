import DatosEscolaridadModel from "../models/mysql/datos_escolaridad";
import { DatosEscolaridad } from "../interface/datos_escolaridad";

const getDatosEscolaridadBy = async (id_registro: number) => {
    const responseDatosEscolaridad = await DatosEscolaridadModel.sequelize?.query(
        "SELECT * FROM datos_escolaridad WHERE id_registro = :id_registro",
        {
            replacements: {
                id_registro: id_registro??0
            }
        });
    return responseDatosEscolaridad?.[0]; 
}

const insertDatosEscolaridad = async (datos:DatosEscolaridad) => {
    const responseInsertDatosEscolaridad = await DatosEscolaridadModel.create(datos);
    return responseInsertDatosEscolaridad;
}

const updateDatosEscolaridad = async (id: string, datos:DatosEscolaridad) => {
    const responseUpdateDatosEscolaridad= await DatosEscolaridadModel.findOne({ where: { id: id.toString() }, rejectOnEmpty: true});
    responseUpdateDatosEscolaridad.update( datos );
    return responseUpdateDatosEscolaridad;
}

export { getDatosEscolaridadBy, insertDatosEscolaridad, updateDatosEscolaridad }