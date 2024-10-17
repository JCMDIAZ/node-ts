import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { Catalogos } from "../../interface/catalogos.interface";

interface CatalogosModel extends Catalogos,Model<InferAttributes<CatalogosModel>, InferCreationAttributes<CatalogosModel>> {
    id: CreationOptional<number>;
}

const CatalogosModel = sequelize.define<CatalogosModel>(
    "catalogos",
    {
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        grupo: {
            type: DataTypes.STRING,
        },
        indice: {
            type: DataTypes.INTEGER,
        },
        valorStr: {
            type: DataTypes.STRING,
        },
        valor: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: true,
    }
);

export default CatalogosModel;