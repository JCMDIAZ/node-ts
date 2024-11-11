const getSchemaDatosDomicilio = {
    type: "object",
    required: [
        "calle",
        "numeroexterior",
        "numerointerior",
        "colonia",
        "municipio",
        "estado",
        "codigopostal",
        "referencias",
        "telefono",
        "tipovivienda",
        "estatusvivienda",
        "vivecon",
        "domicilioactual"
    ],
    properties: {
        id_registro: {
            type: "string",
        },
        calle: {
            type: "string",
        },
        numeroexterior: {
            type: "string",
        },
        numerointerior: {
            type: "string",
        },
        colonia: {
            type: "string",
        },
        municipio: {
            type: "string",
        },
        estado: {
            type: "string",
        },
        codigopostal: {
            type: "string",
        },
        referencias: {
            type: "string",
        },
        telefono: {
            type: "string",
        },
        tipovivienda: {
            type: "integer",
        },
        estatusvivienda: {
            type: "integer",
        },
        vivecon: {
            type: "integer",
        },
        domicilioactual: {
            type: "boolean",
        },
    },
  };

  const getPathDatosDomicilio = {
    "post": {
      "tags": ["DatosDomicilio"],
      "summary": "Ingresar información del Domicilio del aspirante.",
      "description": "Ingresar el domicilio y obtener el detalle.",
      "security": [{"bearerAuth":[]}],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref":"#/components/schemas/datos_domicilio",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Ingresar el domicilio y obtener el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_domicilio",
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

  const getPathDatosDomicilioId = {
    "put": {
      "tags": ["Datosdomicilio"],
      "summary": "Actualiza domicilio.",
      "description": "Actualiza un domicilio y obtenie el detalle.",
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
              "$ref":"#/components/schemas/datos_domicilio",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Actualiza un domicilio y obtenie el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_domicilio",
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

  const getPathDatosDomicilioIMC = {
    "get": {
      "tags": ["DatosDomicilio"],
      "summary": "Detalle del domicilio.",
      "description": "Obtenie el detalle del domicilio.",
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
              "$ref":"#/components/schemas/datos_domicilio",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Obtenie el detalle del domicilio.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_domicilio",
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

  export { getSchemaDatosDomicilio, getPathDatosDomicilio, getPathDatosDomicilioId, getPathDatosDomicilioIMC }