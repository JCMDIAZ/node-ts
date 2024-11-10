const getSchemaDatosInscripcion = {
    type: "object",
    required: [
        "id_registro",
        "id_generacion",
        "id_parroquia_envio",
        "parrocoenvio_nombre",
        "parrocoenvio_proceso",
        "id_centroformativo",
        "id_ministerio"
    ],
    properties: {
        id_registro: {
            type: "integer",
        },
        id_generacion: {
            type: "integer",
        },
        id_parroquia_envio: {
            type: "integer",
        },
        parrocoenvio_nombre: {
            type: "string",
        },
        parrocoenvio_proceso: {
            type: "integer",
        },
        id_centroformativo: {
            type: "integer",
        },
        id_ministerio: {
            type: "integer",
        },
        id_causacambio_centroformativo: {
            type: "integer",
        },
        id_causacambio_ministerio: {
            type: "integer",
        },
        interes_misionero: {
            type: "boolean",
        },
        interes_diacono: {
            type: "boolean",
        },
        notas_administracion: {
            type: "string",
        },
    },
  };

  const getPathDatosInscripcion = {
    "post": {
      "tags": ["DatosInscripcion"],
      "summary": "Ingresar información de la Inscripción.",
      "description": "Ingresar una Inscripción y obtener el detalle.",
      "security": [{"bearerAuth":[]}],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref":"#/components/schemas/datos_inscripcion",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Ingresar una Inscripción y obtener el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_inscripcion",
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

  const getPathDatosInscripcionId = {
    "put": {
      "tags": ["DatosInscripcion"],
      "summary": "Actualiza inscripción.",
      "description": "Actualiza una inscripción y obtenie el detalle.",
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
              "$ref":"#/components/schemas/datos_inscripcion",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Actualiza una inscripción y obtenie el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_inscripcion",
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

  const getPathDatosInscripcionIMC = {
    "get": {
      "tags": ["DatosInscripcion"],
      "summary": "Detalle de la Inscripción.",
      "description": "Obtenie el detalle de la Inscripción.",
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
              "$ref":"#/components/schemas/datos_inscripcion",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Obtenie el detalle de la Inscripción.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_inscripcion",
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

  export { getSchemaDatosInscripcion, getPathDatosInscripcion, getPathDatosInscripcionId, getPathDatosInscripcionIMC }