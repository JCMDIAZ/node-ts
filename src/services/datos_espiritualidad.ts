import DatosEspiritualidadModel from "../models/mysql/datos_espiritualidad";
import { DatosEspiritualidad } from "../interface/datos_espiritualidad";

const getDatosEspiritualidadBy = async (id_registro: number) => {
    const responseDatosEspiritualidad = await DatosEspiritualidadModel.sequelize?.query(
        "SELECT * FROM datos_espiritualidad WHERE id_registro = :id_registro",
        {
            replacements: {
                id_registro: id_registro??0
            }
        });
    return responseDatosEspiritualidad?.[0]; 
}

const insertDatosEspiritualidad = async (datos:DatosEspiritualidad) => {
    const responseInsertDatosEspiritualidad = await DatosEspiritualidadModel.create(datos);
    return responseInsertDatosEspiritualidad;
}

const updateDatosEspiritualidad = async (id: string, datos:DatosEspiritualidad) => {
    const responseUpdateDatosEspiritualidad = await DatosEspiritualidadModel.findOne({ where: { id: id.toString() }, rejectOnEmpty: true});
    responseUpdateDatosEspiritualidad.update( datos );
    return responseUpdateDatosEspiritualidad;
}

export { getDatosEspiritualidadBy, insertDatosEspiritualidad, updateDatosEspiritualidad }