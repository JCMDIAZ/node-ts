const getSchemaStorage = {
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
  };

const getPathStorage = {
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
  };

const getPathStorageId = {
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
  };

export { getSchemaStorage, getPathStorage, getPathStorageId };