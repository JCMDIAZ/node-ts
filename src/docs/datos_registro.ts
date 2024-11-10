const getSchemaDatosRegistro = {
    type: "object",
    required: [
        "nombres", 
        "primerapellido",
        "segundoapellido",
        "nacimiento_fecha",
        "nacimiento_lugar",
        "sexo",
        "curp",
        "telefono",
        "mail",
        "codigovalidacion",
        "validado"
    ],
    properties: {
        nombres: {
            type: "string",
        },
        primerapellido: {
            type: "string",
        },
        segundoapellido: {
            type: "string",
        },
        nacimiento_fecha: {
            type: "string",
            format: "date"
        },
        nacimiento_lugar: {
            type: "string",
        },
        sexo: {
            type: "string",
        },
        curp: {
            type: "string",
        },
        telefono: {
            type: "string",
        },
        mail: {
            type: "string",
        },
        codigovalidacion: {
            type: "string",
        },
        validado: {
            type: "boolean",
        },
        matricula: {
            type: "string",
        },
        estatusformacion: {
            type: "integer",
        },
        fechainstitucion: {
            type: "string",
            format: "date"
        },
        estatusministerio: {
            type: "integer",
        },
        fechadefusion: {
            type: "string",
            format: "date"
        },
        id_user: {
            type: "integer",
        },
    },
  };

  const getPathDatosRegistro = {
    "post": {
      "tags": ["DatosRegistro"],
      "summary": "Ingresar información de Registro.",
      "description": "Ingresar un Registro y obtener el detalle.",
      "security": [{"bearerAuth":[]}],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref":"#/components/schemas/datos_registro",
            }
          }
        }
      },
      "responses":{
        "200":{ 
          "description":"Ingresar un Registro y obtener el detalle.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/datos_registro",
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

  const getPathDatosRegistroId = {
    "put": {
      "tags": ["DatosRegistro"],
      "summary": "Actualiza registro.",
      "description": "Actualiza un registro y obtenie el detalle del registro.",
      "security": [{"bearerAuth":[]}],
      "parameters": [{
        "name":"id",
        "in":"path",
        "description": "ID del registro a retornar",
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
              "$ref":"#/components/schemas/datos_registro",
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
                  "$ref":"#/components/schemas/datos_registro",
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

  const getPathDatosRegistroIMC = {
    "get": {
      "tags": ["DatosRegistro"],
      "summary": "Detalle registro.",
      "description": "Obtenie el detalle del registro.",
      "security": [{"bearerAuth":[]}],
      "parameters": [{
        "name":"id",
        "in":"path",
        "description": "ID del registro a retornar",
        "required":false,
        "schema": {
          "type":"string"
        }
      },{
        "name":"matricula",
        "in":"path",
        "description": "Matricula del registro a retornar",
        "required":false,
        "schema": {
          "type":"string"
        }
      },{
        "name":"curp",
        "in":"path",
        "description": "CURP del registro a retornar",
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
              "$ref":"#/components/schemas/datos_registro",
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
                  "$ref":"#/components/schemas/datos_registro",
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

  export { getSchemaDatosRegistro, getPathDatosRegistro, getPathDatosRegistroId, getPathDatosRegistroIMC }