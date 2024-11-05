const getSchemaParroquias = {
    type: "object",
    properties:{
        id_tipo: {
            type: "integer",
        },
        id_zona: {
            type: "integer",
        },
        id_decanato: {
            type: "integer",
        },
        nombre: {
            type: "string",
        },
        telefono: {
            type: "string",
        },
        responsable_titulo: {
            type: "integer",
        },
        responsable_nombre: {
            type: "string",
        },
        direccion: {
            type: "string",
        },
        estado: {
            type: "string",
        },
        municipio: {
            type: "string",
        },
        colonia: {
            type: "string",
        },
        codigopostal: {
            type: "string",
        },
    }
  };

const getSchemaParroquiasList = {
    type: "object",
    properties:{
        id: {
            type: "integer",
        },
        nombre: {
            type: "string",
        },
        municipio: {
            type: "string",
        },
        responsable_nombre: {
            type: "string",
        }
    }
  };

  const getPathParroquias = {
    "get": {
      "tags": ["Parroquias"],
      "summary": "Listar detalle de las parroquias.",
      "description": "Obten listado detallado de las parroquias.",
      "security": [{"bearerAuth":[]}],
      "responses":{
        "200":{ 
          "description":"Obten listado detallado de las parroquias.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/parroquias",
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

const getPathParroquiasList = {
    "get": {
      "tags": ["Parroquias"],
      "summary": "Listado de nombres de las parroquias.",
      "description": "Obten listado de las parroquias.",
      "security": [{"bearerAuth":[]}],
      "responses":{
        "200":{ 
          "description":"Obten listado de las parroquias.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/parroquias",
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

export { getSchemaParroquias, getSchemaParroquiasList, getPathParroquias, getPathParroquiasList }
