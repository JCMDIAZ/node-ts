import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { Estados } from "../../interface/edomuncol.interface";

interface EstadosModel extends Estados,Model<InferAttributes<EstadosModel>, InferCreationAttributes<EstadosModel>> {};

const EstadosModel = sequelize.define<EstadosModel>(
    "estados",
    {
        c_estado:{
            type: DataTypes.STRING,
        },
        d_estado: {
            type: DataTypes.STRING,
        }
    },
    {}
);

export default EstadosModel;