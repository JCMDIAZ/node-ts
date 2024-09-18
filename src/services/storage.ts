import * as fs from "fs";
import { Storage } from "../interface/storage.interface";
//import StorageModel from "../models/nosql/storage";
import StorageModel from "../models/mysql/storage";

const MEDIA_PATH = `${__dirname}/../storage`;

const registerUpload = async ({ fileName, idUser, url }: Storage) => {
  const responseItem = await StorageModel.create({ fileName, idUser, url });
  return responseItem;
};

const getStorages = async () => {
    //const resposeStorage = await StorageModel.find(); //mongoose
    const resposeStorage = await StorageModel.findAll();
    return resposeStorage;
}

const getStorage = async (id: string) => {
    //const resposeStorage = await StorageModel.find({ _id: id }); //mongoose
    const resposeStorage = await StorageModel.findOne({where: { id: id }});
    return resposeStorage;
}

const deleteStorage = async (id: string) => {
    /*const dataFile:Storage|null = await StorageModel.findById(id);
    const responseStorage = await StorageModel.findOneAndDelete({ _id: id });*/ //mongoose

    const dataFile:Storage = await StorageModel.findOne({where: { id: id }, rejectOnEmpty: true});
    const responseStorage = await StorageModel.destroy({where: { id: id }});

    const { fileName } = <Storage>dataFile;
    const filePath = `${MEDIA_PATH}/${fileName}`; 
    fs.unlinkSync(filePath); //quitarlo si es borrado lógico

    const data = {
        filePath,
        deleted:1
    }

    return { data };
};

export { registerUpload, getStorages, getStorage, deleteStorage };