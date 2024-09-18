import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { Storage } from "../../interface/storage.interface";

interface StorageModel extends Storage,Model<InferAttributes<StorageModel>, InferCreationAttributes<StorageModel>> {
    id: CreationOptional<number>;   
}

const StorageModel = sequelize.define<StorageModel>(
    "storages",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        fileName:{
            type:DataTypes.STRING,
        },
        url:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        idUser:{
            type:DataTypes.STRING,
        },
    },
    {
        timestamps: true,
    }
);

export default StorageModel;