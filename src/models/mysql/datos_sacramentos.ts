import { DatosSacramentos } from "../../interface/datos_sacramentos";
import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

interface DatosSacramentosModel extends DatosSacramentos,Model<InferAttributes<DatosSacramentosModel>, InferCreationAttributes<DatosSacramentosModel>> {
    id: CreationOptional<number>;
};

const DatosSacramentosModel = sequelize.define<DatosSacramentosModel>(
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
        bautizo: {
            type: DataTypes.BOOLEAN,
        },
        bautizo_fecha: {
            type: DataTypes.DATE,
        },
        bautizo_lugar: {
            type: DataTypes.STRING,
        },
        bautizo_parroquia: {
            type: DataTypes.STRING,
        },
        bautizo_constancia: {
            type: DataTypes.BOOLEAN,
        },
        confirmacion: {
            type: DataTypes.BOOLEAN,
        },
        confirmacion_fecha: {
            type: DataTypes.DATE,
        },
        confirmacion_lugar: {
            type: DataTypes.STRING,
        },
        confirmacion_parroquia: {
            type: DataTypes.STRING,
        },
        confirmacion_constancia: {
            type: DataTypes.BOOLEAN,
        },
        matrimonio: {
            type: DataTypes.BOOLEAN,
        },
        matrimonio_fecha: {
            type: DataTypes.DATE,
        },
        matrimonio_lugar: {
            type: DataTypes.STRING,
        },
        matrimonio_parroquia: {
            type: DataTypes.STRING,
        },
        matrimonio_constancia: {
            type: DataTypes.BOOLEAN,
        },
        periodicidad_reconciliacion: {
            type: DataTypes.INTEGER,
        },
        periodicidad_eucaristia: {
            type: DataTypes.INTEGER,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);


export default DatosSacramentosModel;