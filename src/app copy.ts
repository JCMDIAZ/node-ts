import express, { Express, Request, Response } from "express";

const PORT: number = 3000;
const app = express();

app.get('/', (req:Request, res:Response) => {
  res.send({
    message:'Hola Mundo'
  })  
})

app.listen(PORT, () => {
    console.log(`Listo por el puerto ${PORT}`);
})