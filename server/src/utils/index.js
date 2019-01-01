import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import pick from 'lodash/pick'

export const encrypt = (password) => bcrypt.hash(password, 10)
export const compare = (password, hash) => bcrypt.compare(password, hash)

export const generateToken = (data, expiresIn = '4h') => jwt.sign(pick(data, ['userId']), process.env.JWT_SECRET, { expiresIn })
