// server/routes/auth.routes.js

import express from 'express';
import { logUser, registerUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/login', logUser);
router.post('/register', registerUser);

export default router;
