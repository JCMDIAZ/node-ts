import bcryptjs from "bcryptjs";

/**
 * 
 * Contraseña sin encriptar: hola.01
 * @param {*} passordPlain 
 */
const encrypt = async (passordPlain:string) => {
    const hash = await bcryptjs.hash(passordPlain, 10);
    return hash;
};

/**
 * 
 * Pasar contraseña sin encriptar y contraseña encriptada
 * @param {*} passordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain:string, hashPassword:string) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
};

export { encrypt, compare };