import express from 'express'
import auth from "../middleware/auth.js";

const router = express.Router()


// דוגמה:

import authRoutes from './auth.routes.js'

router.use('/auth', authRoutes)


// בדיקת בריאות השרת
router.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'השרת פועל תקין'
  })
})


export default router
