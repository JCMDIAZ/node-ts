import { Schema, Types, model, Model } from "mongoose";
import mongooseDelete from "mongoose-delete";
import { Storage } from "../../interface/storage.interface";

const StoreScheme = new Schema<Storage>(
    {
        fileName:{
            type:String
        },
        idUser: {
            type: String,
        },
        url:{
            type:String
        }
    },
    {
        timestamps: true, //TODO: createdAt, updatedAt
        versionKey: false
    }
);

StoreScheme.plugin(mongooseDelete, { overrideMethods: "all" });
const StorageModel = model("storage", StoreScheme);
export default StorageModel;
