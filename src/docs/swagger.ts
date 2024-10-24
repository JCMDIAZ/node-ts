import swaggerJsdoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";
import { getPathAuthLogin, getPathAuthRegister, getSchemaAuthLogin, getSchemaAutRegister } from "./auth";
import { getPathTracks, getPathTracksId, getSchemaTracks } from "./tracks";
import { getPathStorage, getPathStorageId, getSchemaStorage } from "./storage";
import { getPathCatalogos, getPathCatalogosGrupo, getSchemaCatalogos } from "./catalogos";
import { getPathAsentamientos, getPathEstados, getPathMunicipios, getSchemaAsentamientos, getSchemaEstados, getSchemaMunicipios } from "./edomuncol";
import { getPathGeneracion, getPathListGeneraciones, getSchemaGeneracion, getSchemaListGeneraciones } from "./generacion";
import { getPathCentrosFormacionList, getPathCentrosFormacion, getSchemaCentrosFormacion, getSchemaCentrosFormacionList } from "./centrosformacion";
import { getPathParroquias, getPathParroquiasList, getSchemaParroquias, getSchemaParroquiasList } from "./parroquias";

/**
 * API Config Info
 */

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de mi API Curso de Node REST",
    version: "1.0.1",
  },
  servers: [
    {
      url: "http://localhost:3001/api",
    },
    {
      url: "http://18.223.12.245/api",
    },
  ],
  tags: [
    { name: "Auth", description:"Área de Autorización" }, 
    { name: "Tracks", description:"Área de canciones"},
    { name: "Storage", description:"Área de almacenamiento de archivos"},
    { name: "Catalogos", description:"Área de catalogos"},
    { name: "EdoMunCol", description:"Área de Estados, Municipios y Colonias"},
    { name: "Generacion", description:"Área de Generaciones"},
    { name: "Centros de Formacion", description:"Área de Centros de Formación" },
    { name: "Parroquias", description:"Área de Parroquias" },
  ],
  components: {
    securitySchemes:{
        bearerAuth:{
            type:"http",
            scheme:"bearer"
        }
    },
    schemas: {
      authLogin: getSchemaAuthLogin,
      authRegister: getSchemaAutRegister,
      track: getSchemaTracks,
      storage: getSchemaStorage,
      catalogos: getSchemaCatalogos,
      estados: getSchemaEstados,
      municipios: getSchemaMunicipios,
      asentamientos: getSchemaAsentamientos,
      generacion: getSchemaGeneracion,
      listgeneraciones: getSchemaListGeneraciones,
      centrosformacion: getSchemaCentrosFormacion,
      centrosformacionlist: getSchemaCentrosFormacionList,
      parroquias: getSchemaParroquias,
      parroquiaslist: getSchemaParroquiasList,
    },
  },
  paths:{
    "/auth/register": getPathAuthRegister,
    "/auth/login": getPathAuthLogin,
    "/tracks": getPathTracks,
    "/tracks/{id}": getPathTracksId,
    "/storage": getPathStorage,
    "/storage/{id}": getPathStorageId,
    "/catalogos": getPathCatalogos,
    "/catalogos/{grupo}": getPathCatalogosGrupo,
    "/edomuncol/estados": getPathEstados,
    "/edomuncol/municipios/{c_estado}": getPathMunicipios,
    "/edomuncol/asentamientos/{c_estado}/{c_munpio}": getPathAsentamientos,
    "/generacion": getPathGeneracion,
    "/generacion/list": getPathListGeneraciones,
    "/centrosformacion": getPathCentrosFormacion,
    "/centrosformacion/list": getPathCentrosFormacionList,
    "parroquias": getPathParroquias,
    "parroquias/list": getPathParroquiasList,
  }
};

/**
 * Opciones
 */
const options: OAS3Options = {
  swaggerDefinition,
  apis: ["./routes/*.ts"],
};

const openApiConfiguration = swaggerJsdoc(options);

export { openApiConfiguration };