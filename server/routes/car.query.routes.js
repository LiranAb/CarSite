import express from 'express';
import {getAllMakes, getYearsRange, getModelsByMakeAndYear} from '../controllers/carquery.controller.js';

const router = express.Router();


router.get('/makes', getAllMakes);

router.get('/years', getYearsRange);

router.get('/models', getModelsByMakeAndYear);

export default router;
