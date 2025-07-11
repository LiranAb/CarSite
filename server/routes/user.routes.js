import {Router} from 'express';
import auth from '../middleware/auth.js';
import {updateName, updatePassword, updateCarName, getAllUsersWithCar} from '../controllers/user.controller.js';

const router = Router();

router.put('/name', auth, updateName);
router.put('/password', auth, updatePassword);
router.put('/car', auth, updateCarName);
router.get('/all-users', auth, getAllUsersWithCar);


export default router;
