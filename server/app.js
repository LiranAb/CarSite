import express from 'express'
import cors from 'cors'
import carQueryRoutes from './routes/car.query.routes.js'
import config from '../server/config/index.js'
import {connectToDatabase} from './config/database.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'
import routes from './routes/index.js'
import carImageRoutes from './routes/carimage.routes.js'


const app = express()


connectToDatabase()


app.use(cors({
  origin: config.clientUrl,
  credentials: true
}))
app.use(express.json({ limit: config.maxFileSize }))
app.use(express.urlencoded({ extended: true }))


app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'Server is running properly',
    environment: process.env.NODE_ENV || 'development'
  })
})


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
app.use('/api', carImageRoutes);
app.use('/api', carQueryRoutes);



app.use(notFound)


app.use(errorHandler)

export default app
