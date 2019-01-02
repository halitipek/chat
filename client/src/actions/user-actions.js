import * as constants from '../common/constants'

// Reset user-reducer action
export function resetUser () {
  return {
    type: constants.USER_RESET
  }
}

// Signup actions
export function signupRequest (formData) {
  return {
    type: constants.USER_SIGNUP_REQUEST,
    payload: formData
  }
}

export function signupSuccess (userData) {
  return {
    type: constants.USER_SIGNUP_SUCCESS,
    payload: userData
  }
}

export function signupFailure (errors) {
  return {
    type: constants.USER_SIGNUP_FAILURE,
    payload: errors
  }
}

// Login actions
export function loginRequest (formData) {
  return {
    type: constants.USER_LOGIN_REQUEST,
    payload: formData
  }
}

export function loginSuccess (userData) {
  return {
    type: constants.USER_LOGIN_SUCCESS,
    payload: userData
  }
}

export function loginFailure (errors) {
  return {
    type: constants.USER_LOGIN_FAILURE,
    payload: errors
  }
}

// Auth actions
export function authRequest () {
  return {
    type: constants.USER_AUTH_REQUEST
  }
}

export function authSuccess (userData) {
  return {
    type: constants.USER_AUTH_SUCCESS,
    payload: userData
  }
}

export function authFailure (errors) {
  return {
    type: constants.USER_AUTH_FAILURE,
    payload: errors
  }
}

// Logout actions
export function logout () {
  return {
    type: constants.USER_LOGOUT
  }
}
