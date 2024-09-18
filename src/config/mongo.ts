import "dotenv/config";
import { connect } from "mongoose";

async function dbConnectNoSql(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI)
    .then( (res) => { console.log('**** CONEXION CORRECTA ****'); })
    .catch( (error) => { 
        console.log('**** ERROR DE CONEXION ****');
        console.log(error); 
    } );
};

export default dbConnectNoSql;
