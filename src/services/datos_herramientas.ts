import DatosHerramientasModel from "../models/mysql/datos_herramientas";
import { DatosHerramientas } from "../interface/datos_herramientas";

const getDatosHerramientasBy = async (id_registro: number) => {
    const responseDatosHerramientas = await DatosHerramientasModel.sequelize?.query(
        "SELECT * FROM datos_herramientas WHERE id_registro = :id_registro",
        {
            replacements: {
                id_registro: id_registro??0
            }
        });
    return responseDatosHerramientas?.[0]; 
}

const insertDatosHerramientas = async (datos:DatosHerramientas) => {
    const responseInsertDatosHerramientas = await DatosHerramientasModel.create(datos);
    return responseInsertDatosHerramientas;
}

const updateDatosHerramientas = async (id: string, datos:DatosHerramientas) => {
    const responseUpdateDatosHerramientas = await DatosHerramientasModel.findOne({ where: { id: id.toString() }, rejectOnEmpty: true});
    responseUpdateDatosHerramientas.update( datos );
    return responseUpdateDatosHerramientas;
}

export { getDatosHerramientasBy, insertDatosHerramientas, updateDatosHerramientas }