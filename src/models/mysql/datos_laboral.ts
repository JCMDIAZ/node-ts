import { DatosLaboral } from "../../interface/datos_laboral";
import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

interface DatosLaboralModel extends DatosLaboral,Model<InferAttributes<DatosLaboralModel>, InferCreationAttributes<DatosLaboralModel>> {
    id: CreationOptional<number>;
};

const DatosLaboralModel = sequelize.define<DatosLaboralModel>(
    "datos_laboral",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        id_registro: {
            type: DataTypes.INTEGER,
        },
        labora_situacion: {
            type: DataTypes.INTEGER,
        },
        labora_ubicacion: {
            type: DataTypes.INTEGER,
        },
        labora_tipohorario: {
            type: DataTypes.INTEGER,
        },
        labora_diasdescanso: {
            type: DataTypes.STRING,
        },
        labora_nombreempresa: {
            type: DataTypes.STRING,
        },
        labora_ocupacionoficio: {
            type: DataTypes.STRING,
        },
        labora_domicilio: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);

export default DatosLaboralModel;