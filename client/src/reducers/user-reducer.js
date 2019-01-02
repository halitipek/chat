import * as constants from '../common/constants'

const INITIAL_STATE = {
  isAuth: false,
  data: null,
  errors: null
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case constants.USER_RESET:
      return { ...INITIAL_STATE }

    case constants.USER_SIGNUP_REQUEST:
      return { ...INITIAL_STATE }

    case constants.USER_SIGNUP_SUCCESS:
      return { ...INITIAL_STATE, isAuth: true, data: payload }

    case constants.USER_SIGNUP_FAILURE:
      return { ...INITIAL_STATE, errors: payload }
  
    case constants.USER_LOGIN_REQUEST:
      return { ...INITIAL_STATE }

    case constants.USER_LOGIN_SUCCESS:
      return { ...INITIAL_STATE, isAuth: true, data: payload }

    case constants.USER_LOGIN_FAILURE:
      return { ...INITIAL_STATE, errors: payload }

    case constants.USER_AUTH_REQUEST:
      return { ...state }

    case constants.USER_AUTH_SUCCESS:
      return { ...INITIAL_STATE, isAuth: true, data: payload }

    case constants.USER_AUTH_FAILURE:
      return { ...INITIAL_STATE, errors: payload }

    case constants.USER_LOGOUT:
      return { ...INITIAL_STATE }

    default:
      return state
  }
}
