import { Auth } from "./auth.interface";
import { Request } from "express";

export interface User extends Auth  {
    name: string,
    role: string[],
    birthday: Date,
}

export enum Roles {
    superUser = "su",
    administrativo = "ad",
    maestro = "ma",
    alumno = "al",
    instituido = "in"
}

export interface RequestExt extends Request {
    user?: User | undefined
};