import { Schema, Types, model, Model } from "mongoose";
import mongooseDelete from "mongoose-delete";
import { User, Roles } from "../../interface/users.interface";

const UserScheme = new Schema<User>(
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        role:{
            type:[String, String],
            default: ["user"]
        }
    },
    {
        timestamps: true, //TODO: createdAt, updatedAt
        versionKey: false
    }
);

UserScheme.plugin(mongooseDelete, { overrideMethods: "all" });
const UserModel = model("users", UserScheme);

export default UserModel;