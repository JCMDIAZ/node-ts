import swaggerJsdoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";
import { getPathAuthLogin, getPathAuthRegister, getSchemaAuthLogin, getSchemaAutRegister } from "./auth";
import { getPathTracks, getPathTracksId, getSchemaTracks } from "./tracks";
import { getPathStorage, getPathStorageId, getSchemaStorage } from "./storage";
import { getPathCatalogos, getPathCatalogosGrupo, getSchemaCatalogos } from "./catalogos";
import { getPathAsentamientos, getPathEstados, getPathMunicipios, getSchemaAsentamientos, getSchemaEstados, getSchemaMunicipios } from "./edomuncol";
import { getPathGeneracion, getPathListGeneraciones, getSchemaGeneracion, getSchemaListGeneraciones } from "./generacion";
import { getPathCentrosFormacionList, getPathCentrosFormacion, getSchemaCentrosFormacion, getSchemaCentrosFormacionList } from "./centrosformacion";
import { getPathParroquias, getPathParroquiasList, getSchemaParroquias, getSchemaParroquiasList } from "./parroquias";
import { getPathDatosRegistro, getPathDatosRegistroId, getPathDatosRegistroIMC, getSchemaDatosRegistro } from "./datos_registro";
import { getPathDatosInscripcion, getPathDatosInscripcionId, getPathDatosInscripcionIMC, getSchemaDatosInscripcion, getPathDatosInscripcionNL } from "./datos_inscripcion";
import { getPathDatosDomicilio, getPathDatosDomicilioId, getPathDatosDomicilioIMC, getSchemaDatosDomicilio } from "./datos_domicilio";
import { getPathDatosEstadoCivil, getPathDatosEstadoCivilId, getPathDatosEstadoCivilIMC, getSchemaDatosEstadoCivil } from "./datos_estadocivil";
import { getPathDatosEscolaridad, getPathDatosEscolaridadId, getPathDatosEscolaridadIMC, getSchemaDatosEscolaridad } from "./datos_escolaridad";
import { getPathDatosLaboral, getPathDatosLaboralId, getPathDatosLaboralIMC, getSchemaDatosLaboral } from "./datos_laboral";

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
    { name: "Datos Registro", description:"Área de Datos Registro" },
    { name: "Datos Inscripción", description:"Área de Datos Inscripción" },
    { name: "Datos Domicilio", description:"Área de Datos Domicilio" },
    { name: "Datos Estado Civil", description:"Área de Datos del Esatdo Civil" },
    { name: "Datos Escolaridad", description:"Área de Datos de la Escolaridad" },
    { name: "Datos Laboral", description:"Área de Datos de la Información Laboral" },
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
      datos_registro: getSchemaDatosRegistro,
      datos_inscripcion: getSchemaDatosInscripcion,
      datos_dimicilio: getSchemaDatosDomicilio,
      datos_estadocivil: getSchemaDatosEstadoCivil,
      datos_escolaridad: getSchemaDatosEscolaridad,
      datos_laboral: getSchemaDatosLaboral,
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
    "/parroquias": getPathParroquias,
    "/parroquias/list": getPathParroquiasList,
    "/datos_registro/": getPathDatosRegistro,
    "/datos_registro/{id}": getPathDatosRegistroId,
    "/datos_registro/{id}/{matricula}/{curp}": getPathDatosRegistroIMC,
    "/datos_inscripcion/": getPathDatosInscripcion,
    "/datos_inscripcion/{id}": getPathDatosInscripcionId,
    "/datos_inscripcion/{id_registro}": getPathDatosInscripcionIMC,
    "/datos_inscripcion/numerolista/{id_generacion}/{id_centroformativo}": getPathDatosInscripcionNL,
    "/datos_domicilio/": getPathDatosDomicilio,
    "/datos_domicilio/{id}": getPathDatosDomicilioId,
    "/datos_domicilio/{id_registro}": getPathDatosDomicilioIMC,
    "/datos_estadocivil/": getPathDatosEstadoCivil,
    "/datos_estadocivil/{id}": getPathDatosEstadoCivilId,
    "/datos_estadocivil/{id_registro}": getPathDatosEstadoCivilIMC,
    "/datos_escolaridad/": getPathDatosEscolaridad,
    "/datos_escolaridad/{id}": getPathDatosEscolaridadId,
    "/datos_escolaridad/{id_registro}": getPathDatosEscolaridadIMC,
    "/datos_laboral/": getPathDatosLaboral,
    "/datos_laboral/{id}": getPathDatosLaboralId,
    "/datos_laboral/{id_registro}": getPathDatosLaboralIMC,
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