import swaggerJsdoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

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
    { name: "Catalogos", description:"Área de catalogos"},
  ],
  components: {
    securitySchemes:{
        bearerAuth:{
            type:"http",
            scheme:"bearer"
        }
    },
    schemas: {
      authLogin: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      authRegister: {
        type: "object",
        required: ["email", "password", "age", "name"],
        properties: {
          name: {
            type: "string",
          },
          age: {
            type: "integer",
          },
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      track: {
        type: "object",
        required: ["name", "album", "cover", "artist", "duration", "mediaId"],
        properties: {
          name: {
            type: "string",
          },
          album: {
            type: "string",
          },
          cover: {
            type: "string",
          },
          artist: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              nickname: {
                type: "string",
              },
              nationality: {
                type: "string",
              },
            },
          },
          duration: {
            type: "object",
            properties: {
              start: {
                type: "integer",
              },
              end: {
                type: "integer",
              },
            },
          },
          mediaId: {
            type: "string",
          },
        },
      },
      storage: {
        type: "object",
        properties: {
          url: {
            type: "string",
          },
          filename: {
            type: "string",
          },
          idUder: {
            type: "string",
          },
        },
      },
      catalogos: {
        type: "object",
        properties:{
          grupo: {
            type: "string",
          },
          indice: {
            type: "number",
          },
          valorStr: {
            type: "string",
          },
          valor: {
            type: "string",
          },
        }
      }
    },
  },
  paths:{
    "/auth/register": {
      "post": {
        "tags": ["Auth"],
        "summary": "Register new user.",
        "description": "Esta ruta es para registrar un nuevo usuario.",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref":"#/components/schemas/authRegister",
              }
            }
          }
        },
        "responses":{
          "200":{ "description":"Usuario registrado de manera correcta" },
          "402":{ "description":"Usuario ya registrado" },
          "403":{ "description":"Error al registrar usuario" },
        }
      }
    },
    "/auth/login": {
      "post": {
        "tags": ["Auth"],
        "summary": "Login user.",
        "description": "Iniciar session a un usuario y obtener el token de sesión.",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref":"#/components/schemas/authLogin",
              }
            }
          }
        },
        "responses":{
          "200":{ "description":"Acceso autorizado." },
          "401":{ "description":"Password invalido." },
          "403":{ "description":"Error al ingresar usuario" },
          "404":{ "description":"Usuario no registrado" },
        }
      }
    },
    "/tracks": {
      "get": {
        "tags": ["Tracks"],
        "summary": "Listar canciones.",
        "description": "Obten todas las listas de las canciones.",
        "security": [{"bearerAuth":[]}],
        "responses":{
          "200":{ 
            "description":"Obten todas las listas de las canciones.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref":"#/components/schemas/track",
                  }
                }
              }
            }
          },
          "401":{ "description":"Error de autorización." },
          "422":{ "description":"Error de validación." },
        }
      },
      "post": {
        "tags": ["Tracks"],
        "summary": "Registrar canción.",
        "description": "Registra una cancion y obtener el detalle del registro.",
        "security": [{"bearerAuth":[]}],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref":"#/components/schemas/track",
              }
            }
          }
        },
        "responses":{
          "200":{ 
            "description":"Registra una cancion y obtener el detalle del registro.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref":"#/components/schemas/track",
                  }
                }
              }
            }
          },
          "401":{ "description":"Error de autorización." },
          "403":{ "description":"Error de permisos." },
          "422":{ "description":"Error de validación." },
        }
      }
    },
    "/tracks/{id}": {
      "get": {
        "tags": ["Tracks"],
        "summary": "Detalle canción.",
        "description": "Obten el detalle de una canción.",
        "security": [{"bearerAuth":[]}],
        "parameters": [{
          "name":"id",
          "in":"path",
          "description": "ID de canción a retornar",
          "required":true,
          "schema": {
            "type":"string"
          }
        }],
        "responses":{
          "200":{ 
            "description":"Obten el detalle de una canción.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref":"#/components/schemas/track",
                  }
                }
              }
            }
          },
          "401":{ "description":"Error de autorización." },
          "422":{ "description":"Error de validación." },
        }
      },
      "put": {
        "tags": ["Tracks"],
        "summary": "Actualiza canción.",
        "description": "Actualiza una cancion y obtener el detalle del registro.",
        "security": [{"bearerAuth":[]}],
        "parameters": [{
          "name":"id",
          "in":"path",
          "description": "ID de canción a retornar",
          "required":true,
          "schema": {
            "type":"string"
          }
        }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref":"#/components/schemas/track",
              }
            }
          }
        },
        "responses":{
          "200":{ 
            "description":"Registra una cancion y obtener el detalle del registro.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref":"#/components/schemas/track",
                  }
                }
              }
            }
          },
          "401":{ "description":"Error de autorización." },
          "403":{ "description":"Error de permisos." },
          "422":{ "description":"Error de validación." },
        }
      },
      "delete": {
        "tags": ["Tracks"],
        "summary": "Eliminar canción.",
        "description": "Elimina el detalle de una canción.",
        "security": [{"bearerAuth":[]}],
        "parameters": [{
          "name":"id",
          "in":"path",
          "description": "ID de canción a retornar",
          "required":true,
          "schema": {
            "type":"string"
          }
        }],
        "responses":{
          "200":{ 
            "description":"Obten el detalle de una canción.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref":"#/components/schemas/track",
                  }
                }
              }
            }
          },
          "401":{ "description":"Error de autorización." },
          "422":{ "description":"Error de validación." },
        }
      },
    },
    "/storage":{
      "get": {
        "tags": ["Storage"],
        "summary": "Detalle archivos.",
        "description": "Obten el detalle de un archivo.",
        "security": [{"bearerAuth":[]}],
        "responses":{
          "200":{ 
            "description":"Retorna la listas de las archivos.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref":"#/components/schemas/storage",
                  }
                }
              }
            }
          },
          "401":{ "description":"Error de autorización." },
          "422":{ "description":"Error de validación." },
        }
      },
      "post": {
        "tags": ["Storage"],
        "summary": "Subir archivo.",
        "description": "Subir un archivo.",
        "security": [{"bearerAuth":[]}],
        "requestBody": {
          "required": true,
          "content": {
            "multipart/form-data": {
              "schema": {
                "type":"object",
                "properties": {
                  "myfile": {
                    "type": "string",
                    "format": "binary"
                  }
                }
              }
            }
          }
        },
        "responses":{
          "201":{ "description":"Retorna el objeto insertado en la coleccion.", },
          "401":{ "description":"Error de autorización." },
          "403":{ "description":"Error de permisos." },
          "422":{ "description":"Error de validación." },
        }
      }
    },
    "/storage/{id}":{
      "get": {
        "tags": ["Storage"],
        "summary": "Listar archivos.",
        "description": "Obten todas las listas de los archivos.",
        "security": [{"bearerAuth":[]}],
        "parameters": [{
          "name":"id",
          "in":"path",
          "description": "ID del archivo a retornar",
          "required":true,
          "schema": {
            "type":"string"
          }
        }],
        "responses":{
          "200":{ 
            "description":"Retorna detalle del archivo.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref":"#/components/schemas/storage",
                  }
                }
              }
            }
          },
          "401":{ "description":"Error de autorización." },
          "422":{ "description":"Error de validación." },
        }
      },
      "delete": {
        "tags": ["Storage"],
        "summary": "Subir archivo.",
        "description": "Subir un archivo.",
        "security": [{"bearerAuth":[]}],
        "parameters": [{
          "name":"id",
          "in":"path",
          "description": "ID del archivo a retornar",
          "required":true,
          "schema": {
            "type":"string"
          }
        }],
        "responses":{
          "200":{ "description":"Retorna el objeto eliminado en la coleccion.", },
          "401":{ "description":"Error de autorización." },
          "403":{ "description":"Error de permisos." },
          "422":{ "description":"Error de validación." },
        }
      }
    },
    "/catalogos": {
      "get": {
        "tags": ["Catalogos"],
        "summary": "Listar catalogos del sistema.",
        "description": "Obten listado de los parámetros del sistema.",
        "security": [{"bearerAuth":[]}],
        "responses":{
          "200":{ 
            "description":"Obten listado de los parámetros del sistema.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref":"#/components/schemas/catalogos",
                  }
                }
              }
            }
          },
          "401":{ "description":"Error de autorización." },
          "422":{ "description":"Error de validación." },
        }
      },
    },
    "/catalogos/{grupo}": {
      "get": {
        "tags": ["Catalogos"],
        "summary": "Listar catalogos del sistema.",
        "description": "Obten listado de los parámetros del sistema.",
        "security": [{"bearerAuth":[]}],
        "parameters": [{
          "name":"grupo",
          "in":"path",
          "description": "grupo de catalogo a retornar",
          "required":true,
          "schema": {
            "type":"string"
          }
        }],
        "responses":{
          "200":{ 
            "description":"Obten listado de los parámetros del sistema.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref":"#/components/schemas/catalogos",
                  }
                }
              }
            }
          },
          "401":{ "description":"Error de autorización." },
          "422":{ "description":"Error de validación." },
        }
      },
    },
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