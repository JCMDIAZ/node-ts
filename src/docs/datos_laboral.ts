const getSchemaDatosLaboral = {
    type: "object",
    required: [
        "id_registro",
        "labora_situacion",
        "labora_ubicacion",
        "labora_tipohorario",
        "labora_diasdescanso",
        "labora_nombreempresa",
        "labora_ocupacionoficio",
        "labora_domicilio"
    ],
    properties: {
        id_registro: {
            type: "integer",
        },
        labora_situacion: {
            type: "integer",
        },
        labora_ubicacion: {
            type: "integer",
        },
        labora_tipohorario: {
            type: "integer",
        },
        labora_diasdescanso: {
            type: "string",
        },
        labora_nombreempresa: {
            type: "string",
        },
        labora_ocupacionoficio: {
            type: "string",
        },
        labora_domicilio: {
            type: "string",
        }
    },
  };

  const getPathDatosLaboral = {
    "post": {
      "tags": ["Datos Laboral"],
      "summary": "Ingresar información Laboral del aspirante.",
      "description": "Ingresar información Laboral y obtener el detalle.",
      "security": [{"bearerAuth":[]}],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref":"#/components/schemas/datos_laboral",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Ingresar información Laboral y obtener el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_laboral",
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

  const getPathDatosLaboralId = {
    "put": {
      "tags": ["Datos Laboral"],
      "summary": "Actualiza Información Laboral del aspirante.",
      "description": "Actualiza Información Laboral y obtenie el detalle.",
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
              "$ref":"#/components/schemas/datos_laboral",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Actualiza Información Laboral y obtenie el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_laboral",
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

  const getPathDatosLaboralIMC = {
    "get": {
      "tags": ["Datos Laboral"],
      "summary": "Detalle de la Información Laboral del aspirante.",
      "description": "Obtenie el detalle de la Información Laboral.",
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
              "$ref":"#/components/schemas/datos_laboral",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Obtenie el detalle de la Información Laboral.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_laboral",
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

  export { getSchemaDatosLaboral, getPathDatosLaboral, getPathDatosLaboralId, getPathDatosLaboralIMC }