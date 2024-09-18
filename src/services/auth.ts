import { Auth } from '../interface/auth.interface';
import { User } from '../interface/users.interface';
// import UserModel from '../models/nosql/users';
import UserModel from '../models/mysql/users';
import { encrypt, compare }  from "../utils/handlePassword";
import  { tokenSing } from "../utils/handleJwt";

const registerNewUser = async ( user: User ) => {
    const checkIs = await UserModel.findOne({ where: { email:user.email }});
    if(checkIs) return "ALREADY_USER";

    user.password = await encrypt(user.password);
    const registerNewUser = await UserModel.create( user );

    return registerNewUser;
};

const loginUser = async ( {email, password} : Auth ) => {

    const checkIs = await UserModel.findOne({where: { email }});
    if(!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password;
    const isCorrect = await compare(password, passwordHash);

    if(!isCorrect) return "PASSWORD_INVALID";

    checkIs.password = "";

    const data = {
        token: await tokenSing(checkIs.id.toString(), checkIs.role),
        user: checkIs
    }

    return data;
};

export {registerNewUser, loginUser};