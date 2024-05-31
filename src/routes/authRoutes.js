import express from 'express'
import { register } from '../controllers/authController.js'

const router = express.Router()

router.post('/register', register)

// Otros endpoints para login, actualizar y eliminar usuarios

export default router
