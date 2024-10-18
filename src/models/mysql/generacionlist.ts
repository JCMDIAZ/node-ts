import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { ListGeneracion } from "../../interface/generacion.interface";

interface ListGeneracionModel extends ListGeneracion,Model<InferAttributes<ListGeneracionModel>, InferCreationAttributes<ListGeneracionModel>> {};

const ListGeneracionModel = sequelize.define<ListGeneracionModel>(
    "listgeneracion",
    {
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        nombre_generacion: {
            type: DataTypes.STRING,
        }
    },
    {}
);

export default ListGeneracionModel;