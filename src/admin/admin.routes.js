import { Router } from 'express';
import { check } from 'express-validator';

import {
    adminPost,
} from "./admin.controller.js";
import {
    existsEmail
} from "../helpers/db-validators.js";


import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router();

router.post(
    "/",
    [
        check("name", "El nombre es obligatorio").not().isEmpty(),
        check("password", "The password must be greater than 6 characters").isLength({min:8}),
        check("mail", "It is not a valid email ").isEmail(),
        check("mail").custom(existsEmail),
        validarCampos
    ], adminPost);