import { where } from 'sequelize';
import { Tracks } from '../interface/tracks.interface';
//import TracksModel from "../models/nosql/tracks";
import TracksModel from "../models/mysql/tracks";

interface TracksExt extends Tracks {
    artist_name: string,
    artist_nickname: string,
    artist_nationality: string,
    duration_start: number,
    duration_end: number,
}

const insertTracks = async (track:TracksExt) => {
    track.artist_name = <string>track.artist?.name;
    track.artist_nickname = <string>track.artist?.nickname;
    track.artist_nationality = <string>track.artist?.nationality;
    track.duration_end = <number>track.duration?.end;
    track.duration_start = <number>track.duration?.start;

    const responseInsert = await TracksModel.create(track);
    return responseInsert;
};

const getTracks = async () => {
    const responseTrack = await TracksModel.findOne({});
    return responseTrack;
};

const getTrack = async (id: string) => {
    const responseTrack = await TracksModel.findOne({ where: { id: id.toString() }});
    return responseTrack;
};

const updateTrack = async (id: string, track:TracksExt) => {
    //const responseTrack = await TracksModel.findOneAndUpdate({ where: { id: id.toString() }}, track, { new: true }); //mongoose
    track.artist_name = <string>track.artist?.name;
    track.artist_nickname = <string>track.artist?.nickname;
    track.artist_nationality = <string>track.artist?.nationality;
    track.duration_end = <number>track.duration?.end;
    track.duration_start = <number>track.duration?.start;
    
    const responseTrack = await TracksModel.findOne({ where: { id: id.toString() }, rejectOnEmpty: true});
    responseTrack.update( track );
    return responseTrack;
};

const deleteTrack = async (id: string) => {
    //const responseTrack = await TracksModel.findOneAndDelete({where: { id: id.toString() }}); //mongoose
    const responseTrack = await TracksModel.findOne({where: { id: id.toString() }, rejectOnEmpty: true});
    responseTrack.destroy();
    return responseTrack;
};

export { insertTracks, getTracks, getTrack, updateTrack, deleteTrack };