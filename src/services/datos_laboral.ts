import DatosLaboralModel from "../models/mysql/datos_laboral";
import { DatosLaboral } from "../interface/datos_laboral";

const getDatosLaboralBy = async (id_registro: number) => {
    const responseDatosLaboral = await DatosLaboralModel.sequelize?.query(
        "SELECT * FROM datos_laboral WHERE id_registro = :id_registro",
        {
            replacements: {
                id_registro: id_registro??0
            }
        });
    return responseDatosLaboral?.[0]; 
}

const insertDatosLaboral = async (datos:DatosLaboral) => {
    const responseInsertDatosLaboral = await DatosLaboralModel.create(datos);
    return responseInsertDatosLaboral;
}

const updateDatosLaboral = async (id: string, datos:DatosLaboral) => {
    const responseUpdateDatosLaboral = await DatosLaboralModel.findOne({ where: { id: id.toString() }, rejectOnEmpty: true});
    responseUpdateDatosLaboral.update( datos );
    return responseUpdateDatosLaboral;
}

export { getDatosLaboralBy, insertDatosLaboral, updateDatosLaboral }