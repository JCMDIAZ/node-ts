import { Request, Response, NextFunction } from "express";
import { check } from "express-validator";
import { validateResults } from "../utils/handleValidator";

const validatorDatosEspiritualidad = [
    check("id_registro")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("cargocomunidad")
    .exists()
    .notEmpty()
    .isBoolean(),
    check("cargocomunidad_especificar")
    .exists(),
    check("cargocomunidad_tiempodedicado")
    .exists(),
    check("apostolados_actuales")
    .exists()
    .notEmpty()
    .isLength({min:0,max:1500}),
    check("apostolados_anteriores")
    .exists()
    .notEmpty()
    .isLength({min:0,max:1500}),
    check("cargovoluntario")
    .exists()
    .notEmpty()
    .isBoolean(),
    check("cargovoluntario_especificar")
    .exists(),
    check("cargovoluntario_tiempodedicado")
    .exists(),
    check("formacioncatequetica")
    .exists()
    .notEmpty()
    .isBoolean(),
    check("formacioncatequetica_especificar")
    .exists(),
    check("formacioncatequetica_tiempodedicado")
    .exists(),
    check("catequista")
    .exists()
    .notEmpty()
    .isBoolean(),
    check("ministroextraordinario")
    .exists()
    .notEmpty()
    .isBoolean(),
    check("proclamador")
    .exists()
    .notEmpty()
    .isBoolean(),
    check("agentepastoralsocial")
    .exists()
    .notEmpty()
    .isBoolean(),
    check("frecuencia_asistencia_misa")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("frecuencia_rezo_rosario")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("frecuencia_rezo_liturgiahoras")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("frecuencia_rezo_lectiomeditacion")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("frecuencia_visita_santisimo")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("lectura_meditada")
    .exists()
    .notEmpty()
    .isBoolean(),
    check("lectura_meditada_especificar")
    .exists(),
    check("lectura_meditada")
    .exists()
    .notEmpty()
    .isLength({min:3,max:1500}),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResults(req, res, next);
    }
];

export { validatorDatosEspiritualidad }