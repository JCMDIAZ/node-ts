import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { DatosRegistro } from '../../interface/datos_regitro'; 

interface DatosRegistroModel extends DatosRegistro,Model<InferAttributes<DatosRegistroModel>, InferCreationAttributes<DatosRegistroModel>> {
    id: CreationOptional<number>;
};

const DatosRegistroModel = sequelize.define<DatosRegistroModel>(
    "datos_registro",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        nombres: {
            type: DataTypes.STRING,
        },
        primerapellido: {
            type: DataTypes.STRING,
        },
        segundoapellido: {
            type: DataTypes.STRING,
        },
        nacimiento_fecha: {
            type: DataTypes.DATE,
        },
        nacimiento_entidad: {
            type: DataTypes.STRING,
        },
        nacimiento_lugar: {
            type: DataTypes.STRING,
        },
        sexo: {
            type: DataTypes.STRING,
        },
        curp: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.STRING,
        },
        mail: {
            type: DataTypes.STRING,
        },
        codigovalidacion: {
            type: DataTypes.STRING,
        },
        validado: {
            type: DataTypes.BOOLEAN,
        },
        matricula: {
            type: DataTypes.STRING,
        },
        estatusformacion: {
            type: DataTypes.INTEGER,
        },
        fechainstitucion: {
            type: DataTypes.DATE,
        },
        estatusministerio: {
            type: DataTypes.INTEGER,
        },
        fechadefusion: {
            type: DataTypes.DATE,
        },
        id_user: {
            type: DataTypes.INTEGER,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);

export default DatosRegistroModel;