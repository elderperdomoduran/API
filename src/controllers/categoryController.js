import { createCategory, getCategoryById, getAllCategories, updateCategory, deleteCategory } from '../models/categoryModel.js'

export const create = async (req, res) => {
  try {
    const categoryId = await createCategory(req.body)
    res.status(201).json({ id: categoryId })
  } catch (error) {
    res.status(500).json({ error: 'Error creating category' })
  }
}

export const getById = async (req, res) => {
  try {
    const category = await getCategoryById(req.params.id)
    if (category) {
      res.status(200).json(category)
    } else {
      res.status(404).json({ error: 'Category not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching category' })
  }
}

export const getAll = async (req, res) => {
  try {
    const categories = await getAllCategories()
    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching categories' })
  }
}

export const update = async (req, res) => {
  try {
    await updateCategory(req.params.id, req.body)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Error updating category' })
  }
}

export const remove = async (req, res) => {
  try {
    await deleteCategory(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Error deleting category' })
  }
}
