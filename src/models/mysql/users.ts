import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { User } from "../../interface/users.interface";

interface UserModel extends User,Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id: CreationOptional<number>;   
}

const UserModel = sequelize.define<UserModel>(
    "users",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING,
        },
        password:{
            type:DataTypes.STRING,
        },
        role:{
            type:DataTypes.ENUM(...["su","ad","ma","al","in"]), 
        },
        birthday:{
            type:DataTypes.DATE,
        }
    },
    {
        timestamps: true,
    }
);

export default UserModel;