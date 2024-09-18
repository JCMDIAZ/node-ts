import "dotenv/config";

import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import { openApiConfiguration } from "./docs/swagger";
import morganBody from "morgan-body";
import loggerStream from "./utils/handleLogger";
import dbConnectNoSql from "./config/mongo";
import { dbConnectMySQL } from "./config/mysql";
import {router} from "./routes";

//import swaggerOutput from "./swagger_output.json";

const app = express();

const ENGINE_DB = process.env.ENGINE_DB;
const NODE_ENV = process.env.NODE_ENV || 'development'

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1';

morganBody(app,{
    noColors:true,
    stream: loggerStream,
    skip: function(req, res) {
      return res.statusCode < 400
    }
})

const port = process.env.port || 3000;

// /**
//  * Aqui invocamos a las rutas
//  */

app.use("/api", router);

/**
* Definir ruta de documentación
*/

app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfiguration));


if(NODE_ENV !== 'test'){
  //app.listen(port);
  app.listen(port, () => {
      console.log(`Tu puerto esta lista por http://localhost:${port}`);
  });
}

(ENGINE_DB === 'nosql') ? dbConnectNoSql() : dbConnectMySQL();

export default app;