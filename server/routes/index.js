import { Router } from 'express'
import authRouter from './auth.routes.js'
import userRoutes from './user.routes.js';


const router = Router()

router.use('/auth', authRouter)

router.use('/user', userRoutes);




// בדיקת בריאות השרת
router.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'השרת פועל תקין'
  })
})




export default router
