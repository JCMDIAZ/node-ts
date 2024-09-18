import { Types } from "mongoose";

export interface Tracks {
    name: string,
    album: string,
    cover: string,
    artist?: Artist,
    duration?: Duration,
    mediaId: { type: Types.ObjectId } | string
}

export interface Artist {
    name: string,
    nickname: string,
    nationality: string
}

export interface Duration {
    start: number,
    end: number
}