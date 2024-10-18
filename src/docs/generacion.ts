const getSchemaGeneracion = {
    type: "object",
    properties:{
      nombre_generacion: {
        type: "string",
      },
      fecha_inicio: {
        type: "date",
      },
      fecha_fin: {
        type: "date",
      },
      director_inicio: {
        type: "string",
      },
      director_termino: {
        type: "string",
      },
      total_alumnos_inicio: {
        type: "integer",
      },
      total_alumnos_termino: {
        type: "integer",
      },
      total_centros_presenciales: {
        type: "integer",
      },
      total_centros_virtuales: {
        type: "integer",
      },
    }
  };

const getSchemaListGeneraciones = {
    type: "object",
    properties:{
      grupo: {
        type: "string",
      },
      indice: {
        type: "number",
      },
      valorStr: {
        type: "string",
      },
      valor: {
        type: "string",
      },
    }
  };

const getPathGeneracion = {
    "get": {
      "tags": ["Generacion"],
      "summary": "Listar detalle de las generaciones.",
      "description": "Obten listado detallado de las generaciones.",
      "security": [{"bearerAuth":[]}],
      "responses":{
        "200":{ 
          "description":"Obten listado detallado de las generaciones.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/generacion",
                }
              }
            }
          }
        },
        "401":{ "description":"Error de autorización." },
        "422":{ "description":"Error de validación." },
      }
    },
  };

const getPathListGeneraciones = {
    "get": {
      "tags": ["Generacion"],
      "summary": "Listado de nombres de las generaciones.",
      "description": "Obten listado de las generaciones.",
      "security": [{"bearerAuth":[]}],
      "responses":{
        "200":{ 
          "description":"Obten listado de las generaciones.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/generacion",
                }
              }
            }
          }
        },
        "401":{ "description":"Error de autorización." },
        "422":{ "description":"Error de validación." },
      }
    },
  };

export { getSchemaListGeneraciones, getSchemaGeneracion, getPathGeneracion, getPathListGeneraciones }