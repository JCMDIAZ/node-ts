const getSchemaEstados = {
    type: "object",
    properties:{
      c_estado: {
        type: "string",
      },
      d_estado: {
        type: "string",
      },
    }
  };

const getSchemaMunicipios = {
    type: "object",
    properties:{
      c_munpio: {
        type: "string",
      },
      d_munpio: {
        type: "string",
      },
    }
  };

const getSchemaAsentamientos = {
    type: "object",
    properties:{
      c_asenta: {
        type: "string",
      },
      d_asenta: {
        type: "string",
      },
    }
  };

const getPathEstados = {
    "get": {
      "tags": ["EdoMunCol"],
      "summary": "Listar estados.",
      "description": "Obten listado de los estados de la Republica.",
      "security": [{"bearerAuth":[]}],
      "responses":{
        "200":{ 
          "description":"Obten listado de los estados de la Republica.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/estados",
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

const getPathMunicipios = {
    "get": {
      "tags": ["EdoMunCol"],
      "summary": "Listar Municipios por Estado.",
      "description": "Obten listado de los municipios por estado.",
      "security": [{"bearerAuth":[]}],
      "parameters": [{
        "name":"c_estado",
        "in":"path",
        "description": "Códico de Estado de los Municipios a retornar",
        "required":true,
        "schema": {
          "type":"string"
        }
      }],
      "responses":{
        "200":{ 
          "description":"Obten listado de los municipios por estado.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/municipios",
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

  const getPathAsentamientos = {
    "get": {
      "tags": ["EdoMunCol"],
      "summary": "Listar Asentamiento por Estado y Municipio.",
      "description": "Obten listado de los asentamientos por estado y municipio.",
      "security": [{"bearerAuth":[]}],
      "parameters": [{
        "name":"c_estado",
        "in":"path",
        "description": "Códico de Estado de los Asentamientos a retornar",
        "required":true,
        "schema": {
          "type":"string"
        }
      },{
        "name":"c_munpio",
        "in":"path",
        "description": "Códico de Municipio de los Asentamientos a retornar",
        "required":true,
        "schema": {
          "type":"string"
        }
      }],
      "responses":{
        "200":{ 
          "description":"Obten listado de los asentamientos por estado y municipio.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/asentamientos",
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

export { getSchemaEstados, getSchemaMunicipios, getSchemaAsentamientos, getPathEstados, getPathMunicipios, getPathAsentamientos };