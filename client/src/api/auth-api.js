import { request } from '../utils'

request.defaults.baseUrl = '/api/user'

export const signup = (formData) => request.post('/signup', formData)
export const login = (formData) => request.post('/login', formData)
export const auth = () => request.post('/auth')
