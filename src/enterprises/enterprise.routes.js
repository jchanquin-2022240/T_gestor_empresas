import { Router } from 'express';
import { check } from 'express-validator';

import{
    enterpriseGet,
    enterprisePost,
    enterpriseGetByYears,
    enterpriseGetByCategory,
    enterpriseGetExcelReport,
} from "./enterprise.controller.js";
import {
    existsNameEnterprise
} from "../helpers/db-validators.js";

import { validarCampos } from '../middlewares/validar-campos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get("/", validarJWT, enterpriseGet);
router.get("/filterYear", validarJWT, enterpriseGetByYears);
router.get("/filterByCategory", validarJWT, enterpriseGetByCategory);
router.get("/excelReport", validarJWT, enterpriseGetExcelReport);


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