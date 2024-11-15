const getSchemaDatosEstadoCivil = {
    type: "object",
    required: [
        "id_registro",
        "id_estadocivil",
        "conyuge_nombres",
        "conyuge_primerapellido",
        "conyuge_segundoapellido",
        "conyuge_fechanacimiento",
        "conyuge_fechadefunsion",
        "matrimoniocivil_fecha",
        "matrimoniocivil_fechaseparacion",
        "matrimoniocivil_constancia",
        "totalhijos"
    ],
    properties: {
        id_registro: {
            type: "integer",
        },
        id_estadocivil: {
            type: "integer",
        },
        conyuge_nombres: {
            type: "string",
        },
        conyuge_primerapellido: {
            type: "string",
        },
        conyuge_segundoapellido: {
            type: "string",
        },
        conyuge_fechanacimiento: {
            type: "date",
        }, 	
        conyuge_fechadefunsion: {
            type: "date",
        },
        matrimoniocivil_fecha: {
            type: "date",
        },
        matrimoniocivil_fechaseparacion: {
            type: "date",
        },
        matrimoniocivil_constancia: {
            type: "boolean"
        },
        totalhijos: {
            type: "integer",
        },
    },
  };

  const getPathDatosEstadoCivil = {
    "post": {
      "tags": ["Datos Estado Civil"],
      "summary": "Ingresar información del Estado Civil del aspirante.",
      "description": "Ingresar información del Estado Civil y obtener el detalle.",
      "security": [{"bearerAuth":[]}],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref":"#/components/schemas/datos_estadocivil",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Ingresar información del Estado Civil y obtener el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_estadocivil",
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

  const getPathDatosEstadoCivilId = {
    "put": {
      "tags": ["Datos Estado Civil"],
      "summary": "Actualiza Esatdo Civil.",
      "description": "Actualiza el Estado Civil y obtenie el detalle.",
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
              "$ref":"#/components/schemas/datos_estadocivil",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Actualiza el Estado Civil y obtenie el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_estadocivil",
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

  const getPathDatosEstadoCivilIMC = {
    "get": {
      "tags": ["Datos Estado Civil"],
      "summary": "Detalle del Esatdo Civil.",
      "description": "Obtenie el detalle del Estado Civil.",
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
              "$ref":"#/components/schemas/datos_estadocivil",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Obtenie el detalle del Estado Civil.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_estadocivil",
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

  export { getSchemaDatosEstadoCivil, getPathDatosEstadoCivil, getPathDatosEstadoCivilId, getPathDatosEstadoCivilIMC }