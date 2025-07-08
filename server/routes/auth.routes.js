import { Router } from 'express';
import { registerUser, logUser } from '../controllers/auth.controller.js';
import authMiddleware from '../middleware/auth.js';

const router = Router();

// רישום משתמש חדש
router.post('/register', registerUser);

// התחברות
router.post('/login', logUser);

// קבלת פרטי המשתמש המחובר
// router.get('/me', authMiddleware, getMe);

export default router;
