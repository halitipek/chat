import User from '../models/user-model'

const loginController = async (req, res, next) => {
  const { email, password } = req.body

  try {
    const user = await User.getByEmail(email)
    const isValid = await user.checkPassword(password)
    
    res.status(200).json(user.clear())
  } catch (err) {
    res.status(404).json(err)
  }
}

export default loginController
