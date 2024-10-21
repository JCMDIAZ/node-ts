import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { CentrosFormacionList } from "../../interface/centrosformacion.interface";

interface CentrosFormacionListModel extends CentrosFormacionList,Model<InferAttributes<CentrosFormacionListModel>, InferCreationAttributes<CentrosFormacionListModel>> {};

const CentrosFormacionListModel = sequelize.define<CentrosFormacionListModel>(
    "centrosformacionlist",
    {
        centro_numero: {
            type: DataTypes.INTEGER,
        },
        centro_nombre: {
            type: DataTypes.STRING,
        },
        centro_horario: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);

export default CentrosFormacionListModel;