const getSchemaTracks = {
    type: "object",
    required: ["name", "album", "cover", "artist", "duration", "mediaId"],
    properties: {
      name: {
        type: "string",
      },
      album: {
        type: "string",
      },
      cover: {
        type: "string",
      },
      artist: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          nickname: {
            type: "string",
          },
          nationality: {
            type: "string",
          },
        },
      },
      duration: {
        type: "object",
        properties: {
          start: {
            type: "integer",
          },
          end: {
            type: "integer",
          },
        },
      },
      mediaId: {
        type: "string",
      },
    },
  };

  const getPathTracks = {
    "get": {
      "tags": ["Tracks"],
      "summary": "Listar canciones.",
      "description": "Obten todas las listas de las canciones.",
      "security": [{"bearerAuth":[]}],
      "responses":{
        "200":{ 
          "description":"Obten todas las listas de las canciones.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/track",
                }
              }
            }
          }
        },
        "401":{ "description":"Error de autorización." },
        "422":{ "description":"Error de validación." },
      }
    },
    "post": {
      "tags": ["Tracks"],
      "summary": "Registrar canción.",
      "description": "Registra una cancion y obtener el detalle del registro.",
      "security": [{"bearerAuth":[]}],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref":"#/components/schemas/track",
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
                  "$ref":"#/components/schemas/track",
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

  const getPathTracksId = {
    "get": {
      "tags": ["Tracks"],
      "summary": "Detalle canción.",
      "description": "Obten el detalle de una canción.",
      "security": [{"bearerAuth":[]}],
      "parameters": [{
        "name":"id",
        "in":"path",
        "description": "ID de canción a retornar",
        "required":true,
        "schema": {
          "type":"string"
        }
      }],
      "responses":{
        "200":{ 
          "description":"Obten el detalle de una canción.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/track",
                }
              }
            }
          }
        },
        "401":{ "description":"Error de autorización." },
        "422":{ "description":"Error de validación." },
      }
    },
    "put": {
      "tags": ["Tracks"],
      "summary": "Actualiza canción.",
      "description": "Actualiza una cancion y obtener el detalle del registro.",
      "security": [{"bearerAuth":[]}],
      "parameters": [{
        "name":"id",
        "in":"path",
        "description": "ID de canción a retornar",
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
              "$ref":"#/components/schemas/track",
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
                  "$ref":"#/components/schemas/track",
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
    "delete": {
      "tags": ["Tracks"],
      "summary": "Eliminar canción.",
      "description": "Elimina el detalle de una canción.",
      "security": [{"bearerAuth":[]}],
      "parameters": [{
        "name":"id",
        "in":"path",
        "description": "ID de canción a retornar",
        "required":true,
        "schema": {
          "type":"string"
        }
      }],
      "responses":{
        "200":{ 
          "description":"Obten el detalle de una canción.",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref":"#/components/schemas/track",
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

  export { getSchemaTracks, getPathTracks, getPathTracksId }