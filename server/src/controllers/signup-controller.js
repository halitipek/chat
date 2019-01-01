import User from '../models/user-model'
import { generateToken } from '../utils'

const signupController = async (req, res) => {
  try {
    await User.isAvailable(req.body)
    const newUser = await User.create(req.body)

    res.set('Authorization', `Bearer ${generateToken(newUser)}`)
    res.status(201).json(newUser.clear())
  } catch (err) {
    res.status(422).json(err)
  }
}

export default signupController
