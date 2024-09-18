import { sequelize } from "../../config/mysql";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { Artist, Tracks } from "../../interface/tracks.interface";
import Storage from "./storage";
import UserModel from "./users";

interface TracksModel extends Tracks,Model<InferAttributes<TracksModel>, InferCreationAttributes<TracksModel>> {
    id: CreationOptional<number>;
    artist_name: string;
    artist_nickname: string;
    artist_nationality: string;
    duration_start: number;
    duration_end: number;
}

const TracksModel = sequelize.define<TracksModel>(
    "tracks",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        album:{
            type:DataTypes.STRING,
        },
        cover:{
            type:DataTypes.STRING,
        },
        artist_name:{
            type:DataTypes.STRING,
        },
        artist_nickname:{
            type:DataTypes.STRING,
        },
        artist_nationality:{
            type:DataTypes.STRING,
        },
        duration_start:{
            type:DataTypes.NUMBER,
        },
        duration_end:{
            type:DataTypes.NUMBER,
        },
        mediaId:{
            type:DataTypes.STRING, 
        }
    },
    {
        timestamps: true,
    }
);

/**
 * Implementando modelo personalizado
 */
/*
    TracksModel.findAllData = function() {
        TracksModel.belongsTo(Storage,{
            foreignKey: 'mediaId',
            as:'audio'
        });

        return TracksModel.findAll({include:'audio'});
    };

    TracksModel.findOneData = function(id) {
        TracksModel.belongsTo(Storage,{
            foreignKey: 'mediaId',
            as:'audio'
        });

        return TracksModel.findOne({ where: { id },include:'audio'});
    };
*/

export default TracksModel;
