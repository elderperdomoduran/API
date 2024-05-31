import pool from '../config/db.js'

export const createComment = async (commentData) => {
  const [result] = await pool.query('INSERT INTO comments SET ?', commentData)
  return result.insertId
}

export const getCommentById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM comments WHERE id = ?', [id])
  return rows[0]
}

export const getCommentsByPostId = async (postId) => {
  const [rows] = await pool.query('SELECT * FROM comments WHERE post_id = ?', [postId])
  return rows
}

export const updateComment = async (id, commentData) => {
  await pool.query('UPDATE comments SET ? WHERE id = ?', [commentData, id])
}

export const deleteComment = async (id) => {
  await pool.query('DELETE FROM comments WHERE id = ?', [id])
}
