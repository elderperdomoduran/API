import pool from '../config/db.js'

export const createPost = async (postData) => {
  const [result] = await pool.query('INSERT INTO posts SET ?', postData)
  return result.insertId
}

export const getPostById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM posts WHERE id = ?', [id])
  return rows[0]
}

export const getAllPosts = async () => {
  const [rows] = await pool.query('SELECT * FROM posts')
  return rows
}

export const updatePost = async (id, postData) => {
  await pool.query('UPDATE posts SET ? WHERE id = ?', [postData, id])
}

export const deletePost = async (id) => {
  await pool.query('DELETE FROM posts WHERE id = ?', [id])
}
