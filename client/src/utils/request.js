import axios from 'axios'
import jwtDecode from 'jwt-decode'

axios.defaults.timeout = 10000
axios.defaults.validateStatus = status => status < 500

axios.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token')
    if (
      token && 
      (jwtDecode(token)).exp > Math.floor((new Date()).getTime() / 1000)
    ) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  }, 
  error => Promise.reject(error)
)

axios.interceptors.response.use(response => {
    const token = response.headers.authorization
    if (token) {
      sessionStorage.setItem('token', token.slice(7, -1))
    }

    return response
  }, 
  error => Promise.reject(error)
)

export default axios
