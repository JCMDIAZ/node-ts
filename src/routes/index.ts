import { readdirSync } from "fs";
import { Router } from "express";

const router = Router();

const PATH_ROUTES = `${__dirname}`; 

const removeExtension = (fileName: string): string => {
    const  cleanFileName = <string>fileName.split('.').shift();
    return cleanFileName;
}

function loadRouter(file: string): void {
    const name = removeExtension(file);
    if(name !== 'index'){
        import(`./${file}`)
            .then((routerModule) => {
                //console.log(`Cargando ruta ${name}`);
                router.use(`/${name}`, routerModule.router);
            });
    }
}

readdirSync(PATH_ROUTES).filter((file) => loadRouter(file));

export { router };