import { DatosEspiritualidad } from "../../interface/datos_espiritualidad";
import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

interface DatosEspiritualidadModel extends DatosEspiritualidad,Model<InferAttributes<DatosEspiritualidadModel>, InferCreationAttributes<DatosEspiritualidadModel>> {
    id: CreationOptional<number>;
};

const DatosEspiritualidadModel = sequelize.define<DatosEspiritualidadModel>(
    "datos_espiritualidad",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        id_registro: {
            type: DataTypes.INTEGER,
        },
        fecha: {
            type: DataTypes.DATE,
        },
        cargocomunidad: {
            type: DataTypes.BOOLEAN,
        },
        cargocomunidad_especificar: {
            type: DataTypes.STRING,
        },
        cargocomunidad_tiempodedicado: {
            type: DataTypes.INTEGER,
        },
        apostolados_actuales: {
            type: DataTypes.STRING,
        },
        apostolados_anteriores: {
            type: DataTypes.STRING,
        },
        cargovoluntario: {
            type: DataTypes.BOOLEAN,
        },
        cargovoluntario_especificar: {
            type: DataTypes.STRING,
        },
        cargovoluntario_tiempodedicado: {
            type: DataTypes.INTEGER,
        },
        formacioncatequetica: {
            type: DataTypes.BOOLEAN,
        },
        formacioncatequetica_especificar: {
            type: DataTypes.STRING,
        },
        formacioncatequetica_tiempodedicado: {
            type: DataTypes.INTEGER,
        },
        catequista: {
            type: DataTypes.BOOLEAN,
        },
        catequista_periodo: {
            type: DataTypes.STRING,
        },
        ministroextraordinario: {
            type: DataTypes.BOOLEAN,
        },
        ministroextraordinario_periodo: {
            type: DataTypes.STRING,
        },
        proclamador: {
            type: DataTypes.BOOLEAN,
        },
        proclamador_periodo: {
            type: DataTypes.STRING,
        },
        agentepastoralsocial: {
            type: DataTypes.BOOLEAN,
        },
        agentepastoralsocial_periodo: {
            type: DataTypes.STRING,
        },
        frecuencia_asistencia_misa: {
            type: DataTypes.INTEGER,
        },
        frecuencia_rezo_rosario: {
            type: DataTypes.INTEGER,
        },
        frecuencia_rezo_liturgiahoras: {
            type: DataTypes.INTEGER,
        },
        frecuencia_rezo_lectiomeditacion: {
            type: DataTypes.INTEGER,
        },
        frecuencia_visita_santisimo: {
            type: DataTypes.INTEGER,
        },
        lectura_meditada: {
            type: DataTypes.BOOLEAN,
        },
        lectura_meditada_especificar: {
            type: DataTypes.STRING,
        },
        especifique_ser_ministro: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);


export default DatosEspiritualidadModel;