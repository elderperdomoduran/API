import pool from '../config/db.js'

export const createUser = async (userData) => {
  const [result] = await pool.query('INSERT INTO users SET ?', userData)
  return result.insertId
}

export const getUserById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id])
  return rows[0]
}

// Otros métodos para actualizar y eliminar usuarios
