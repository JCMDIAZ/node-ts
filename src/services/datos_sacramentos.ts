import DatosSacramentosModel from "../models/mysql/datos_sacramentos";
import { DatosSacramentos } from "../interface/datos_sacramentos";


const getDatosSacramentosBy = async (id_registro: number) => {
    const responseDatosSacramentos = await DatosSacramentosModel.sequelize?.query(
        "SELECT * FROM datos_sacramentos WHERE id_registro = :id_registro",
        {
            replacements: {
                id_registro: id_registro??0
            }
        });
    return responseDatosSacramentos?.[0]; 
}

const insertDatosSacramentos = async (datos:DatosSacramentos) => {
    const responseInsertDatosSacramentos = await DatosSacramentosModel.create(datos);
    return responseInsertDatosSacramentos;
}

const updateDatosSacramentos = async (id: string, datos:DatosSacramentos) => {
    const responseUpdateDatosSacramentos = await DatosSacramentosModel.findOne({ where: { id: id.toString() }, rejectOnEmpty: true});
    responseUpdateDatosSacramentos.update( datos );
    return responseUpdateDatosSacramentos;
}

export { getDatosSacramentosBy, insertDatosSacramentos, updateDatosSacramentos }