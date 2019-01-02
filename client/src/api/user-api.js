import { request } from '../utils'

export const signup = (formData) => request.post('/signup', formData)
export const login = (formData) => request.post('/login', formData)
export const auth = () => request.post('/auth')
