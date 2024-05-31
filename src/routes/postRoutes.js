import express from 'express'
import { create, getById, getAll, update, remove } from '../controllers/postController.js'

const router = express.Router()

router.post('/', create)
router.get('/:id', getById)
router.get('/', getAll)
router.put('/:id', update)
router.delete('/:id', remove)

export default router
