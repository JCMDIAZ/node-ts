import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { Asentamientos } from "../../interface/edomuncol.interface";

interface AsentamientosModel extends Asentamientos,Model<InferAttributes<AsentamientosModel>, InferCreationAttributes<AsentamientosModel>> {};

const AsentamientosModel = sequelize.define<AsentamientosModel>(
    "municipios",
    {
        c_asenta:{
            type: DataTypes.STRING,
        },
        d_asenta: {
            type: DataTypes.STRING,
        }
    },
    {}
);

export default AsentamientosModel;