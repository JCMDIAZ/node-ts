import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { Generacion } from "../../interface/generacion.interface";

interface GeneracionModel extends Generacion,Model<InferAttributes<GeneracionModel>, InferCreationAttributes<GeneracionModel>> {
    id: CreationOptional<number>;
};

const GeneracionModel = sequelize.define<GeneracionModel>(
    "generacion",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        nombre_generacion: {
            type: DataTypes.STRING,
        },
        fecha_inicio: {
            type: DataTypes.DATE
        },
        fecha_fin: {
            type: DataTypes.DATE
        },
        director_inicio: {
            type: DataTypes.STRING
        },
        director_termino: {
            type: DataTypes.STRING
        },
        total_alumnos_inicio: {
            type: DataTypes.INTEGER
        },
        total_alumnos_termino: {
            type: DataTypes.INTEGER
        },
        total_centros_presenciales: {
            type: DataTypes.INTEGER
        },
        total_centros_virtuales: {
            type: DataTypes.INTEGER
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);

export default GeneracionModel;