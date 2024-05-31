import { createComment, getCommentById, getCommentsByPostId, updateComment, deleteComment } from '../models/commentModel.js'

export const create = async (req, res) => {
  try {
    const commentId = await createComment(req.body)
    res.status(201).json({ id: commentId })
  } catch (error) {
    res.status(500).json({ error: 'Error creating comment' })
  }
}

export const getById = async (req, res) => {
  try {
    const comment = await getCommentById(req.params.id)
    if (comment) {
      res.status(200).json(comment)
    } else {
      res.status(404).json({ error: 'Comment not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching comment' })
  }
}

export const getByPostId = async (req, res) => {
  try {
    const comments = await getCommentsByPostId(req.params.postId)
    res.status(200).json(comments)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching comments' })
  }
}

export const update = async (req, res) => {
  try {
    await updateComment(req.params.id, req.body)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Error updating comment' })
  }
}

export const remove = async (req, res) => {
  try {
    await deleteComment(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Error deleting comment' })
  }
}
