const getSchemaAuthLogin = {
    type: "object",
    required: ["email", "password"],
    properties: {
        email: {
        type: "string",
        },
        password: {
        type: "string",
        },
    },
    };

const getSchemaAutRegister = {
    type: "object",
    required: ["email", "password", "age", "name"],
    properties: {
      name: {
        type: "string",
      },
      age: {
        type: "integer",
      },
      email: {
        type: "string",
      },
      password: {
        type: "string",
      },
    },
  };

const getPathAuthLogin = {
    "post": {
      "tags": ["Auth"],
      "summary": "Login user.",
      "description": "Iniciar session a un usuario y obtener el token de sesión.",
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref":"#/components/schemas/authLogin",
            }
          }
        }
      },
      "responses":{
        "200":{ "description":"Acceso autorizado." },
        "401":{ "description":"Password invalido." },
        "403":{ "description":"Error al ingresar usuario" },
        "404":{ "description":"Usuario no registrado" },
      }
    }
  };

const getPathAuthRegister = {
    "post": {
      "tags": ["Auth"],
      "summary": "Register new user.",
      "description": "Esta ruta es para registrar un nuevo usuario.",
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref":"#/components/schemas/authRegister",
            }
          }
        }
      },
      "responses":{
        "200":{ "description":"Usuario registrado de manera correcta" },
        "402":{ "description":"Usuario ya registrado" },
        "403":{ "description":"Error al registrar usuario" },
      }
    }
  };

export { getSchemaAuthLogin, getSchemaAutRegister, getPathAuthLogin, getPathAuthRegister }