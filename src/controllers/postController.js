import { createPost, getPostById, getAllPosts, updatePost, deletePost } from '../models/postModel.js'

export const create = async (req, res) => {
  try {
    const postId = await createPost(req.body)
    res.status(201).json({ id: postId })
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' })
  }
}

export const getById = async (req, res) => {
  try {
    const post = await getPostById(req.params.id)
    if (post) {
      res.status(200).json(post)
    } else {
      res.status(404).json({ error: 'Post not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching post' })
  }
}

export const getAll = async (req, res) => {
  try {
    const posts = await getAllPosts()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' })
  }
}

export const update = async (req, res) => {
  try {
    await updatePost(req.params.id, req.body)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Error updating post' })
  }
}

export const remove = async (req, res) => {
  try {
    await deletePost(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Error deleting post' })
  }
}
