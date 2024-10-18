import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { Municipios } from "../../interface/edomuncol.interface";

interface MunicipiosModel extends Municipios,Model<InferAttributes<MunicipiosModel>, InferCreationAttributes<MunicipiosModel>> {};

const MunicipiosModel = sequelize.define<MunicipiosModel>(
    "municipios",
    {
        c_munpio:{
            type: DataTypes.STRING,
        },
        d_munpio: {
            type: DataTypes.STRING,
        }
    },
    {}
);

export default MunicipiosModel;