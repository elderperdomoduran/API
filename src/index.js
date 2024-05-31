import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import postRoutes from './routes/postRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import commentRoutes from './routes/commentRoutes.js'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
