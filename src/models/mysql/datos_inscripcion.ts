import { DatosInscripcion } from "../../interface/datos_inscripcion";
import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

interface DatosInscripcionModel extends DatosInscripcion,Model<InferAttributes<DatosInscripcionModel>, InferCreationAttributes<DatosInscripcionModel>> {
    id: CreationOptional<number>;
};

const DatosInscripcionModel = sequelize.define<DatosInscripcionModel>(
    "datos_inscripcion",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        id_registro: {
            type: DataTypes.INTEGER,
        },
        id_generacion: {
            type: DataTypes.INTEGER,
        },
        id_parroquia_envio: {
            type: DataTypes.INTEGER,
        },
        parrocoenvio_nombre: {
            type: DataTypes.STRING,
        },
        parrocoenvio_proceso: {
            type: DataTypes.INTEGER,
        },
        id_centroformativo: {
            type: DataTypes.INTEGER,
        },
        id_ministerio: {
            type: DataTypes.INTEGER,
        },
        numero_lista: {
            type: DataTypes.INTEGER,
        },
        id_causacambio_centroformativo: {
            type: DataTypes.INTEGER,
        },
        id_causacambio_ministerio: {
            type: DataTypes.INTEGER,
        },
        interes_misionero: {
            type: DataTypes.BOOLEAN,
        },
        interes_diacono: {
            type: DataTypes.BOOLEAN,
        },
        notas_administracion: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);


export default DatosInscripcionModel;