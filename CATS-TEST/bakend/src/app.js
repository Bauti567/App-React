// Arranque de la aplicacion
import express from 'express'
import authRoutes from './routes/auth.routes.js'


export const app = express()

app.use(express.json())
app.use('/api',authRoutes)


export default app;
