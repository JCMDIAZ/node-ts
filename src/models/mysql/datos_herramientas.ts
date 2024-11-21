import { DatosHerramientas } from "../../interface/datos_herramientas";
import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

interface DatosHerramientasModel extends DatosHerramientas,Model<InferAttributes<DatosHerramientasModel>, InferCreationAttributes<DatosHerramientasModel>> {
    id: CreationOptional<number>;
};

const DatosHerramientasModel = sequelize.define<DatosHerramientasModel>(
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
        dispositivo: {
            type: DataTypes.BOOLEAN,
        },
        dispositivo_especifique: {
            type: DataTypes.STRING,
        },
        servicios: {
            type: DataTypes.BOOLEAN,
        },
        servicios_especifique: {
            type: DataTypes.STRING,
        },
        problemas_tecnicos: {
            type: DataTypes.STRING,
        },
        plataformas: {
            type: DataTypes.STRING,
        },
        redes_sociales: {
            type: DataTypes.STRING,
        },
        problemas_aplicaciones: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);


export default DatosHerramientasModel;