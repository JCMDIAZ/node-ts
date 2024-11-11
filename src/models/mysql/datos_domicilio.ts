import { DatosDomicilio } from "../../interface/datos_domicilio";
import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

interface DatosDomicilioModel extends DatosDomicilio,Model<InferAttributes<DatosDomicilioModel>, InferCreationAttributes<DatosDomicilioModel>> {
    id: CreationOptional<number>;
};

const DatosDomicilioModel = sequelize.define<DatosDomicilioModel>(
    "datos_domicilio",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        id_registro: {
            type: DataTypes.INTEGER,
        },
        calle: {
            type: DataTypes.STRING,
        },
        numeroexterior: {
            type: DataTypes.STRING,
        },
        numerointerior: {
            type: DataTypes.STRING,
        },
        colonia: {
            type: DataTypes.STRING,
        },
        municipio: {
            type: DataTypes.STRING,
        },
        estado: {
            type: DataTypes.STRING,
        },
        codigopostal: {
            type: DataTypes.STRING,
        },
        referencias: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.STRING,
        },
        tipovivienda: {
            type: DataTypes.INTEGER,
        },
        estatusvivienda: {
            type: DataTypes.INTEGER,
        },
        vivecon: {
            type: DataTypes.INTEGER,
        },
        domicilioactual: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);


export default DatosDomicilioModel;