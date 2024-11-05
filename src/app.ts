import "dotenv/config";

import express, { Request, Response } from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import { openApiConfiguration } from "./docs/swagger";
import morganBody from "morgan-body";
import loggerStream from "./utils/handleLogger";
import dbConnectNoSql from "./config/mongo";
import { dbConnectMySQL } from "./config/mysql";
import {router} from "./routes";

import nodemailer from "nodemailer";
import bodyParser from 'body-parser';
import { authMiddleware } from "./middleware/sessions";

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/deliver', authMiddleware, async (req: Request, res: Response) => {
  let { recipient, subject, text, html, } = req.body;
  const transporter = nodemailer.createTransport({
    host: "mail.ministerioslaicalesmty.org",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD, // the app password Not your gmail password
    },
    logger: true,
  });

  const info = await transporter.sendMail({
      from: process.env.EMAIL, 
      to: recipient,
      subject: subject, 
      text: text,
      html: html
  });

  console.log("Message sent: %s", info.messageId);

  res.send("Message sent")
})

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