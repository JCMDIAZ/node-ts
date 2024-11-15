import CentrosFormacionModel from "../models/mysql/centrosformacion";
import CentrosFormacionListModel from '../models/mysql/centrosformacionlist';

const getCentrosFormacion = async () => {
    const resposeCentrosFormacion = await CentrosFormacionModel.findAll();
    return resposeCentrosFormacion;
}

const getCentrosFormacionList = async (id_generacion: number) => {
    const resposeCentrosFormacionList = await CentrosFormacionListModel.sequelize?.query(
        'SELECT id, centro_numero, centro_nombre, centro_horario FROM centrosformacion WHERE id_generacion = :id_generacion',
        {
            replacements: {
                id_generacion: id_generacion,
            }
        });
    return resposeCentrosFormacionList?.[0];
}

export { getCentrosFormacion, getCentrosFormacionList }