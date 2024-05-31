import crypto from 'crypto'
import util from 'util'

const scrypt = util.promisify(crypto.scrypt)

export const hashPassword = async (password) => {
  const salt = crypto.randomBytes(16).toString('hex')
  const derivedKey = await scrypt(password, salt, 64)
  return `${salt}:${derivedKey.toString('hex')}`
}

export const verifyPassword = async (password, hashedPassword) => {
  const [salt, key] = hashedPassword.split(':')
  const derivedKey = await scrypt(password, salt, 64)
  return key === derivedKey.toString('hex')
}
