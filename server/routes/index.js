import { Router } from 'express'
import authRouter from './auth.routes.js'
import {registerUser,logUser} from "../controllers/auth.controller.js";


const router = Router()

router.use('/auth', authRouter)




// בדיקת בריאות השרת
router.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'השרת פועל תקין'
  })
})




export default router
