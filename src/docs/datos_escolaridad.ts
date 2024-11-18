const getSchemaDatosEscolaridad = {
    type: "object",
    required: [
        "id_registro",
        "gradoestudio",
        "gradoestudio_estatus",
        "gradoestudio_carrera",
        "gradoestudio_aniotermino"
    ],
    properties: {
        id_registro: {
            type: "integer",
        },
        gradoestudio: {
            type: "integer",
        },
        gradoestudio_estatus: {
            type: "integer",
        },
        gradoestudio_carrera: {
            type: "string",
        },
        gradoestudio_aniotermino: {
            type: "integer",
        },
    },
  };

  const getPathDatosEscolaridad = {
    "post": {
      "tags": ["Datos Escolaridad"],
      "summary": "Ingresar información de la Escolaridad del aspirante.",
      "description": "Ingresar información de la Escolaridad y obtener el detalle.",
      "security": [{"bearerAuth":[]}],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref":"#/components/schemas/datos_escolaridad",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Ingresar información de la Escolaridad y obtener el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_escolaridad",
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
  };

  const getPathDatosEscolaridadId = {
    "put": {
      "tags": ["Datos Escolaridad"],
      "summary": "Actualiza Escolaridad del aspirante.",
      "description": "Actualiza la Escolaridad y obtenie el detalle.",
      "security": [{"bearerAuth":[]}],
      "parameters": [{
        "name":"id",
        "in":"path",
        "description": "ID del registro de inscripcion a retornar",
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
              "$ref":"#/components/schemas/datos_escolaridad",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Actualiza la Escolaridad y obtenie el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_esolaridad",
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
  };

  const getPathDatosEscolaridadIMC = {
    "get": {
      "tags": ["Datos Escolaridad"],
      "summary": "Detalle de la Escolaridad del aspirante.",
      "description": "Obtenie el detalle de la Escolaridad.",
      "security": [{"bearerAuth":[]}],
      "parameters": [{
        "name":"id_registro",
        "in":"path",
        "description": "ID del registro a retornar",
        "required":false,
        "schema": {
          "type":"string"
        }
      }],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref":"#/components/schemas/datos_escolaridad",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Obtenie el detalle de la Escolaridad.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_escolaridad",
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
  };

  export { getSchemaDatosEscolaridad, getPathDatosEscolaridad, getPathDatosEscolaridadId, getPathDatosEscolaridadIMC }