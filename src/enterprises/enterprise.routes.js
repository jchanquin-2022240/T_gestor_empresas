import { Router } from 'express';
import { check } from 'express-validator';

import{
    enterprisePost,
} from "./enterprise.controller.js";
import {
    existsNameEnterprise
} from "../helpers/db-validators.js";

import { validarCampos } from '../middlewares/validar-campos.js';

const router = Router();

router.post(
    "/",
    [
        check("name", "The name cannot be empty ").not().isEmpty(),
        check("name").custom(existsNameEnterprise),
        check("impact", "the impact cannot be empty").not().isEmpty(),
        check("experience", "the experience cannot be empty and numeric").not().isEmpty().isNumeric(),
        check("category", "the category cannot be empty").not().isEmpty(),
        check("partner", "the partner cannot be empty").not().isEmpty(),
        validarCampos
    ], enterprisePost);

export default router;