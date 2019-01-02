import User from '../models/user-model'
import { generateToken } from '../utils'

const loginController = async (req, res) => {
  const { email, password, rememberMe } = req.body

  try {
    let user = await User.getByEmail(email)
    await user.checkPassword(password)
    
    if (user.rememberMe !== rememberMe) {
      user.rememberMe = rememberMe

      user = await user.save()
    }

    res.set('Authorization', `Bearer ${generateToken(user)}`)
    res.status(200).json({ data: user.clear(), success: true })
  } catch (err) {
    res.status(403).json({ errors: err })
  }
}

export default loginController
