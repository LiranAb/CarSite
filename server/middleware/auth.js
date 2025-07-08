
import jwt from 'jsonwebtoken'
import config from '../config/index.js'
import User from '../models/user.model.js'

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '')
    
    if (!token) {
      return res.status(401).json({ message: 'אין טוקן, גישה נדחית' })
    }


    const decoded = jwt.verify(token, config.jwtSecret)


    const user = await User.findById(decoded.userId).select('-password')
    
    if (!user) {
      return res.status(401).json({ message: 'משתמש לא נמצא' })
    }

    req.user = user
    next()
  } catch (error) {
    res.status(401).json({ message: 'טוקן לא תקין' })
    console.error('Auth error:', error.message)
  }
}

export default authMiddleware

