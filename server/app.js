import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import config from '../server/config/index.js'
import {connectToDatabase} from './config/database.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'
import routes from './routes/index.js'


const app = express()

// חיבור למסד נתונים
connectToDatabase()

// Middleware בסיסי
app.use(cors({
  origin: config.clientUrl,
  credentials: true
}))
app.use(express.json({ limit: config.maxFileSize }))
app.use(express.urlencoded({ extended: true }))

// נתיב בריאות השרת
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'Server is running properly',
    environment: process.env.NODE_ENV || 'development'
  })
})

// נתיב בסיסי
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to the project server!',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api'
    }
  })
})

 app.use('/api', routes)

// Middleware לטיפול ב-404
app.use(notFound)

// Middleware לטיפול בשגיאות כלליות
app.use(errorHandler)

export default app
