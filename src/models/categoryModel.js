import pool from '../config/db.js'

export const createCategory = async (categoryData) => {
  const [result] = await pool.query('INSERT INTO categories SET ?', categoryData)
  return result.insertId
}

export const getCategoryById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM categories WHERE id = ?', [id])
  return rows[0]
}

export const getAllCategories = async () => {
  const [rows] = await pool.query('SELECT * FROM categories')
  return rows
}

export const updateCategory = async (id, categoryData) => {
  await pool.query('UPDATE categories SET ? WHERE id = ?', [categoryData, id])
}

export const deleteCategory = async (id) => {
  await pool.query('DELETE FROM categories WHERE id = ?', [id])
}
