import jwt from "jsonwebtoken";

const JWT_SECRET:string = <string>process.env.JWT_SECRET;

/**
 * Debes de pasar el objeto del usuario
 * @param {*} user 
 */
const tokenSing = async (id: string, role: string[]) => {
    const sign = await jwt.sign(
        {
            id,
            role,
        },
        JWT_SECRET,
        {
            expiresIn:"2h",
        }
    );

    return sign;
};

/**
 * Debes de pasar el token de session el JWT
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt:string) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET);
    } catch (e) {
        return null;
    }
};

export { tokenSing, verifyToken };