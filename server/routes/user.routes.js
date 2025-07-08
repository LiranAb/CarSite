import express from 'express';
import auth from '../middleware/auth.js';
import { updateName, updatePassword } from '../controllers/user.controller.js';

const router = express.Router();

router.put('/name', auth, updateName);
router.put('/password', auth, updatePassword);

export default router;
