import { Router } from 'express'
import * as ct from '../controllers'

const router = Router()

router.post('/signup', ct.signupController)
router.post('/login', ct.loginController)

export default router
