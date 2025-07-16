import express from 'express';
import { getCarImageFromPexels } from '../controllers/carImage.controller.js';

const router = express.Router();

router.get('/carimage', getCarImageFromPexels);

export default router;
