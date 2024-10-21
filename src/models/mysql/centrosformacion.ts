import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { CentrosFormacion } from "../../interface/centrosformacion.interface";

interface CentrosFormacionModel extends CentrosFormacion,Model<InferAttributes<CentrosFormacionModel>, InferCreationAttributes<CentrosFormacionModel>> {
    id: CreationOptional<number>;
};

const CentrosFormacionModel = sequelize.define<CentrosFormacionModel>(
    "centrosformacion",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        id_generacion: {
            type: DataTypes.INTEGER,
        },
        id_zona: {
            type: DataTypes.INTEGER,
        },
        id_parroquia: {
            type: DataTypes.INTEGER,
        },
        centro_numero: {
            type: DataTypes.INTEGER,
        },
        centro_nombre: {
            type: DataTypes.STRING,
        },
        centro_horario: {
            type: DataTypes.STRING,
        },
        coordinador_nombre: {
            type: DataTypes.STRING,
        },
        coordinador_celular: {
            type: DataTypes.STRING,
        },
        subcoordinador_nombre: {
            type: DataTypes.STRING,
        },
        subcoordinador_celular: {
            type: DataTypes.STRING,
        },
        secretario_nombre: {
            type: DataTypes.STRING,
        },
        secretario_celular: {
            type: DataTypes.STRING,
        },
        finanzas_nombre: {
            type: DataTypes.STRING,
        },
        finanzas_celular: {
            type: DataTypes.STRING,
        },
        tecnologia_nombre: {
            type: DataTypes.STRING,
        },
        tecnologia_celular: {
            type: DataTypes.STRING,
        },
        serviciopractico_nombre: {
            type: DataTypes.STRING,
        },
        serviciopractico_celular: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);

export default CentrosFormacionModel;