import { DatosEscolaridad } from "../../interface/datos_escolaridad";
import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

interface DatosEscolaridadModel extends DatosEscolaridad,Model<InferAttributes<DatosEscolaridadModel>, InferCreationAttributes<DatosEscolaridadModel>> {
    id: CreationOptional<number>;
};

const DatosEscolaridadModel = sequelize.define<DatosEscolaridadModel>(
    "datos_escolaridad",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        id_registro: {
            type: DataTypes.INTEGER,
        },
        gradoestudio: {
            type: DataTypes.INTEGER,
        },
        gradoestudio_estatus: {
            type: DataTypes.INTEGER,
        },
        gradoestudio_carrera: {
            type: DataTypes.STRING,
        },
        gradoestudio_aniotermino: {
            type: DataTypes.INTEGER,
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);


export default DatosEscolaridadModel;