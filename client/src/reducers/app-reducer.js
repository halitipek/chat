import * as constants from '../common/constants'

const INITIAL_STATE = {
  loading: false,
  errors: null,
  notifs: null
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case constants.APP_RESET:
      return { ...INITIAL_STATE }

    case constants.APP_ERROR_SHOW:
      return { ...state, errors: payload }

    case constants.APP_ERROR_HIDE:
      return { ...state, errors: null }

    case constants.APP_NOTIF_SHOW:
      return { ...state, notifs: payload }

    case constants.APP_NOTIF_HIDE:
      return { ...state, notifs: null }

    case constants.APP_SET_LOADING:
      return { ...state, loading: payload }
  
    default:
      return state
  }
}
