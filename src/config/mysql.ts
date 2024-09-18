import "dotenv/config";
import { Sequelize } from "sequelize";

const database = <string>process.env.MYSQL_DATABASE;
const username = <string>process.env.MYSQL_USER;
const password = <string>process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host: host,
        dialect: "mysql"
    }
);

async function dbConnectMySQL(): Promise<void> {
    try {
        await sequelize.authenticate();
        console.log('MYSQL: Conecxión correcta.');
        
    } catch (e) {
        console.log('MYSQL: Error de Conecxión.', e);
    }
}

export { dbConnectMySQL, sequelize };