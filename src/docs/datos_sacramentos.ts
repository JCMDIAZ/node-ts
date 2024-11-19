const getSchemaDatosSacramentos = {
    type: "object",
    required: [
        "id_registro",
        "bautizo",
        "bautizo_fecha",
        "bautizo_lugar",
        "bautizo_parroquia",
        "bautizo_constancia",
        "confirmacion",
        "confirmacion_fecha",
        "confirmacion_lugar",
        "confirmacion_parroquia",
        "confirmacion_constancia",
        "matrimonio",
        "matrimonio_fecha",
        "matrimonio_lugar",
        "matrimonio_parroquia",
        "matrimonio_constancia",
        "periodicidad_reconciliacion",
        "periodicidad_eucaristia"
    ],
    properties: {
        id_registro: {
            type: "integer",
        },
        bautizo: {
            type: "boolean",
        },
        bautizo_fecha: {
            type: "Date",
        },
        bautizo_lugar: {
            type: "string",
        },
        bautizo_parroquia: {
            type: "string",
        },
        bautizo_constancia: {
            type: "boolean",
        },
        confirmacion: {
            type: "boolean",
        },
        confirmacion_fecha: {
            type: "Date",
        },
        confirmacion_lugar: {
            type: "string",
        },
        confirmacion_parroquia: {
            type: "string",
        },
        confirmacion_constancia: {
            type: "boolean",
        },
        matrimonio: {
            type: "boolean",
        },
        matrimonio_fecha: {
            type: "Date",
        },
        matrimonio_lugar: {
            type: "string",
        },
        matrimonio_parroquia: {
            type: "string",
        },
        matrimonio_constancia: {
            type: "boolean",
        },
        periodicidad_reconciliacion: {
            type: "integer",
        },
        periodicidad_eucaristia: {
            type: "integer",
        },
    },
  };

  const getPathDatosSacramentos = {
    "post": {
      "tags": ["Datos Sacramentos"],
      "summary": "Ingresar información de los Sacramentos del aspirante.",
      "description": "Ingresar información de los Sacramentos y obtener el detalle.",
      "security": [{"bearerAuth":[]}],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref":"#/components/schemas/datos_sacramentos",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Ingresar información de los Sacramentos y obtener el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_sacramentos",
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

  const getPathDatosSacramentosId = {
    "put": {
      "tags": ["Datos Sacramentos"],
      "summary": "Actualiza información de los Sacramentos del aspirante.",
      "description": "Actualiza información de los Sacramentos y obtenie el detalle.",
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
              "$ref":"#/components/schemas/datos_sacramentos",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Actualiza información de los Sacramentos y obtenie el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_sacramentos",
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

  const getPathDatosSacramentosIMC = {
    "get": {
      "tags": ["Datos Sacramentos"],
      "summary": "Detalle de los Sacramentos del aspirante.",
      "description": "Obtenie el detalle de los Sacramentos.",
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
              "$ref":"#/components/schemas/datos_sacramentos",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Obtenie el detalle de los Sacramentos.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_sacramentos",
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

  export { getSchemaDatosSacramentos, getPathDatosSacramentos, getPathDatosSacramentosId, getPathDatosSacramentosIMC }