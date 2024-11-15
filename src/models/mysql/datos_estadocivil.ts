import { DatosEstadoCivil } from "../../interface/datos_estadocivil";
import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

interface DatosEstadoCivilModel extends DatosEstadoCivil,Model<InferAttributes<DatosEstadoCivilModel>, InferCreationAttributes<DatosEstadoCivilModel>> {
    id: CreationOptional<number>;
};

const DatosEstadoCivilModel = sequelize.define<DatosEstadoCivilModel>(
    "datos_estadocivil",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        id_registro: {
            type: DataTypes.INTEGER,
        },
        id_estadocivil: {
            type: DataTypes.INTEGER,
        },
        conyuge_nombres: {
            type: DataTypes.STRING,
        },
        conyuge_primerapellido: {
            type: DataTypes.STRING,
        },
        conyuge_segundoapellido: {
            type: DataTypes.STRING,
        },
        conyuge_fechanacimiento: {
            type: DataTypes.DATE,
        }, 	
        conyuge_fechadefunsion: {
            type: DataTypes.DATE,
        },
        matrimoniocivil_fecha: {
            type: DataTypes.DATE,
        },
        matrimoniocivil_fechaseparacion: {
            type: DataTypes.DATE,
        },
        matrimoniocivil_constancia: {
            type: DataTypes.BOOLEAN
        },
        totalhijos: {
            type: DataTypes.INTEGER,
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);


export default DatosEstadoCivilModel;