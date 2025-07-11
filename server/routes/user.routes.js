import {Router} from 'express';
import auth from '../middleware/auth.js';
import { updateName, updatePassword,updateCarName } from '../controllers/user.controller.js';

const router = Router();

router.put('/name', auth, updateName);
router.put('/password', auth, updatePassword);
router.put('/car', auth, updateCarName);


export default router;
