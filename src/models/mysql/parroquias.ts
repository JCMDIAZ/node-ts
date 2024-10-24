import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { Parroquias } from "../../interface/parroquias";

interface ParroquiasModel extends Parroquias,Model<InferAttributes<ParroquiasModel>, InferCreationAttributes<ParroquiasModel>> {
    id: CreationOptional<number>;
};

const ParroquiasModel = sequelize.define<ParroquiasModel>(
    "parroquias",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        id_tipo: {
            type: DataTypes.INTEGER,
        },
        id_zona: {
            type: DataTypes.INTEGER,
        },
        id_decanato: {
            type: DataTypes.INTEGER,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.STRING,
        },
        responsable_titulo: {
            type: DataTypes.INTEGER,
        },
        responsable_nombre: {
            type: DataTypes.STRING,
        },
        direccion: {
            type: DataTypes.STRING,
        },
        estado: {
            type: DataTypes.STRING,
        },
        municipio: {
            type: DataTypes.STRING,
        },
        colonia: {
            type: DataTypes.STRING,
        },
        codigopostal: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);

export default ParroquiasModel;