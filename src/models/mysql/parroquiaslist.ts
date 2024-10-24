import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { ParroquiaList } from "../../interface/parroquias";

interface ParroquiasListModel extends ParroquiaList,Model<InferAttributes<ParroquiasListModel>, InferCreationAttributes<ParroquiasListModel>> {};

const ParroquiasListModel = sequelize.define<ParroquiasListModel>(
    "parroquias",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        municipio: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);

export default ParroquiasListModel;