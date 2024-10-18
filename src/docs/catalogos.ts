const getSchemaCatalogos = {
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

const getPathCatalogos = {
    "get": {
      "tags": ["Catalogos"],
      "summary": "Listar catalogos del sistema.",
      "description": "Obten listado de los parámetros del sistema.",
      "security": [{"bearerAuth":[]}],
      "responses":{
        "200":{ 
          "description":"Obten listado de los parámetros del sistema.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/catalogos",
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

const getPathCatalogosGrupo = {
    "get": {
      "tags": ["Catalogos"],
      "summary": "Listar catalogos del sistema.",
      "description": "Obten listado de los parámetros del sistema.",
      "security": [{"bearerAuth":[]}],
      "parameters": [{
        "name":"grupo",
        "in":"path",
        "description": "grupo de catalogo a retornar",
        "required":true,
        "schema": {
          "type":"string"
        }
      }],
      "responses":{
        "200":{ 
          "description":"Obten listado de los parámetros del sistema.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/catalogos",
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

export { getSchemaCatalogos, getPathCatalogos, getPathCatalogosGrupo };