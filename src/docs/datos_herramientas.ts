const getSchemaDatosHerramientas = {
    type: "object",
    required: [
        "id_registro",
        "dispositivo",
        "dispositivo_especifique",
        "servicios",
        "servicios_especifique",
        "problemas_tecnicos",
        "plataformas",
        "redes_sociales",
        "problemas_aplicaciones"
    ],
    properties: {
        id_registro: {
            type: "integer",
        },
        dispositivo: {
            type: "boolean",
        },
        dispositivo_especifique: {
            type: "string",
        },
        servicios: {
            type: "boolean",
        },
        servicios_especifique: {
            type: "string",
        },
        problemas_tecnicos: {
            type: "string",
        },
        plataformas: {
            type: "string",
        },
        redes_sociales: {
            type: "string",
        },
        problemas_aplicaciones: {
            type: "string",
        }
    },
  };

  const getPathDatosHerramientas = {
    "post": {
      "tags": ["Datos Herramientas"],
      "summary": "Ingresar información de las Herramientas del aspirante.",
      "description": "Ingresar información de las Herramientas y obtener el detalle.",
      "security": [{"bearerAuth":[]}],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref":"#/components/schemas/datos_herramientas",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Ingresar información de las Herramientas y obtener el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_herramientas",
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

  const getPathDatosHerramientasId = {
    "put": {
      "tags": ["Datos Herramientas"],
      "summary": "Actualiza Herramientas del aspirante.",
      "description": "Actualiza la Herramientas y obtenie el detalle.",
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
              "$ref":"#/components/schemas/datos_herramientas",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Actualiza la Herramientas y obtenie el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_herramientas",
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

  const getPathDatosHerramientasIMC = {
    "get": {
      "tags": ["Datos Herramientas"],
      "summary": "Detalle de las Herramientas del aspirante.",
      "description": "Obtenie el detalle de la Herramientas.",
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
              "$ref":"#/components/schemas/datos_herrmientas",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Obtenie el detalle de las Herramientas.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_herramientas",
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

  export { getSchemaDatosHerramientas, getPathDatosHerramientas, getPathDatosHerramientasId, getPathDatosHerramientasIMC }