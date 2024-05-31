import { createUser } from '../models/userModel.js'
import { hashPassword } from '../utils/hashUtil.js'

export const register = async (req, res) => {
  try {
    const hashedPassword = await hashPassword(req.body.password)
    const userData = { ...req.body, password: hashedPassword }
    const userId = await createUser(userData)
    res.status(201).json({ id: userId })
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' })
  }
}
