import { Router } from 'express';
import {logUser, registerUser} from '../controllers/auth.controller.js';

const router = Router()

router.post('/register', registerUser);
router.post('/login',logUser);

export default router;
