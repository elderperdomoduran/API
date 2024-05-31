import express from 'express'
import { create, getById, getByPostId, update, remove } from '../controllers/commentController.js'

const router = express.Router()

router.post('/', create)
router.get('/:id', getById)
router.get('/post/:postId', getByPostId)
router.put('/:id', update)
router.delete('/:id', remove)

export default router
