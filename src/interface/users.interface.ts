import { Auth } from "./auth.interface";
import { Request } from "express";

export interface User extends Auth  {
    name: string,
    age: number,
    role: string[]
}

export enum Roles {
    user = "user",
    admin = "admin"
}

export interface RequestExt extends Request {
    user?: User | undefined
};