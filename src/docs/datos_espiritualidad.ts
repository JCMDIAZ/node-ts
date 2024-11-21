const getSchemaDatosEspiritualidad = {
    type: "object",
    required: [
        "id_registro",
        "fecha",
        "cargocomunidad",
        "cargocomunidad_especificar",
        "cargocomunidad_tiempodedicado",
        "apostolados_actuales",
        "apostolados_anteriores",
        "cargovoluntario",
        "cargovoluntario_especificar",
        "cargovoluntario_tiempodedicado",
        "formacioncatequetica",
        "formacioncatequetica_especificar",
        "formacioncatequetica_tiempodedicado",
        "catequista",
        "catequista_periodo",
        "ministroextraordinario",
        "ministroextraordinario_periodo",
        "proclamador",
        "proclamador_periodo",
        "agentepastoralsocial",
        "agentepastoralsocial_periodo",
        "frecuencia_asistencia_misa",
        "frecuencia_rezo_rosario",
        "frecuencia_rezo_liturgiahoras",
        "frecuencia_rezo_lectiomeditacion",
        "frecuencia_visita_santisimo",
        "lectura_meditada",
        "lectura_meditada_especificar",
        "especifique_ser_ministro"
    ],
    properties: {
        id_registro: {
            type: "integer",
        },
        fecha: {
            type: "Date",
        },
        cargocomunidad: {
            type: "boolean",
        },
        cargocomunidad_especificar: {
            type: "string",
        },
        cargocomunidad_tiempodedicado: {
            type: "integer",
        },
        apostolados_actuales: {
            type: "string",
        },
        apostolados_anteriores: {
            type: "string",
        },
        cargovoluntario: {
            type: "boolean",
        },
        cargovoluntario_especificar: {
            type: "string",
        },
        cargovoluntario_tiempodedicado: {
            type: "integer",
        },
        formacioncatequetica: {
            type: "boolean",
        },
        formacioncatequetica_especificar: {
            type: "string",
        },
        formacioncatequetica_tiempodedicado: {
            type: "integer",
        },
        catequista: {
            type: "boolean",
        },
        catequista_periodo: {
            type: "string",
        },
        ministroextraordinario: {
            type: "boolean",
        },
        ministroextraordinario_periodo: {
            type: "string",
        },
        proclamador: {
            type: "boolean",
        },
        proclamador_periodo: {
            type: "string",
        },
        agentepastoralsocial: {
            type: "boolean",
        },
        agentepastoralsocial_periodo: {
            type: "string",
        },
        frecuencia_asistencia_misa: {
            type: "integer",
        },
        frecuencia_rezo_rosario: {
            type: "integer",
        },
        frecuencia_rezo_liturgiahoras: {
            type: "integer",
        },
        frecuencia_rezo_lectiomeditacion: {
            type: "integer",
        },
        frecuencia_visita_santisimo: {
            type: "integer",
        },
        lectura_meditada: {
            type: "boolean",
        },
        lectura_meditada_especificar: {
            type: "string",
        },
        especifique_ser_ministro: {
            type: "string",
        }
    },
  };

  const getPathDatosEspiritualidad = {
    "post": {
      "tags": ["Datos Espiritualidad"],
      "summary": "Ingresar información de la Espiritualidad del aspirante.",
      "description": "Ingresar información de la Espiritualidad y obtener el detalle.",
      "security": [{"bearerAuth":[]}],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref":"#/components/schemas/datos_espiritualidad",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Ingresar información de la Espiritualidad y obtener el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_espiritualidad",
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

  const getPathDatosEspiritualidadId = {
    "put": {
      "tags": ["Datos Espiritualidad"],
      "summary": "Actualiza Espiritualidad del aspirante.",
      "description": "Actualiza la Espiritualidad y obtenie el detalle.",
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
              "$ref":"#/components/schemas/datos_espiritualidad",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Actualiza la Espiritualidad y obtenie el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_espiritualidad",
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

  const getPathDatosEspiritualidadIMC = {
    "get": {
      "tags": ["Datos Espiritualidad"],
      "summary": "Detalle de la Espiritualidad del aspirante.",
      "description": "Obtenie el detalle de la Espiritualidad.",
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
              "$ref":"#/components/schemas/datos_espiritualidad",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Obtenie el detalle de la Espiritualidad.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_espiritualidad",
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

  export { getSchemaDatosEspiritualidad, getPathDatosEspiritualidad, getPathDatosEspiritualidadId, getPathDatosEspiritualidadIMC }