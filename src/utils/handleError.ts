import { Response } from "express";

const handleHttpError = (res: Response, message = 'Algo sucedio', code = 403) => {
    res.status(code);
    res.send({error: message});
};

export {handleHttpError};