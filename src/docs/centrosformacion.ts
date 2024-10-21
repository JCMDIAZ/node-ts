const getSchemaCentrosFormacion = {
    type: "object",
    properties:{
        id_generacion: {
            type: "integer",
        },
        id_zona: {
            type: "integer",
        },
        id_parroquia: {
            type: "integer",
        },
        centro_numero: {
            type: "integer",
        },
        centro_nombre: {
            type: "string",
        },
        centro_horario: {
            type: "string",
        },
        coordinador_nombre: {
            type: "string",
        },
        coordinador_celular: {
            type: "string",
        },
        subcoordinador_nombre: {
            type: "string",
        },
        subcoordinador_celular: {
            type: "string",
        },
        secretario_nombre: {
            type: "string",
        },
        secretario_celular: {
            type: "string",
        },
        finanzas_nombre: {
            type: "string",
        },
        finanzas_celular: {
            type: "string",
        },
        tecnologia_nombre: {
            type: "string",
        },
        tecnologia_celular: {
            type: "string",
        },
        serviciopractico_nombre: {
            type: "string",
        },
        serviciopractico_celular: {
            type: "string",
        },
    }
  };

const getSchemaCentrosFormacionList = {
    type: "object",
    properties:{
        centro_numero: {
            type: "integer",
        },
        centro_nombre: {
            type: "string",
        },
        centro_horario: {
            type: "string",
        },
    }
};

const getPathCentrosFormacion = {
    "get": {
      "tags": ["Centros de Formacion"],
      "summary": "Listar detalle de los centros de formacion.",
      "description": "Obten detalle de los centros de formacion.",
      "security": [{"bearerAuth":[]}],
      "responses":{
        "200":{ 
          "description":"Obten detalle de los centros de formacion.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/centrosformacion",
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

const getPathCentrosFormacionList = {
    "get": {
      "tags": ["Centros de Formacion"],
      "summary": "Listar los centros de formacion y sus horarios por generacion.",
      "description": "Obten listado de los centros de formacion y sus horarios.",
      "security": [{"bearerAuth":[]}],
      "parameters": [{
        "name":"id_generacion",
        "in":"path",
        "description": "Id de Generación a retornar",
        "required":true,
        "schema": {
          "type":"number"
        }
      }],
      "responses":{
        "200":{ 
          "description":"Obten listado de los centros de formacion y sus horarios.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/centrosformacionlist",
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

export { getSchemaCentrosFormacion, getSchemaCentrosFormacionList, getPathCentrosFormacion, getPathCentrosFormacionList }