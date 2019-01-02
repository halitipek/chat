import * as constants from '../common/constants'

// Reset app-reducer action
export function resetApp () {
  return {
    type: constants.APP_RESET
  }
}

// Error actions
export function errorShow (errors) {
  return {
    type: constants.APP_ERROR_SHOW,
    payload: errors
  }
}

export function errorHide () {
  return {
    type: constants.APP_ERROR_HIDE
  }
}

// Notification actions
export function notifShow (notifs) {
  return {
    type: constants.APP_NOTIF_SHOW,
    payload: notifs
  }
}

export function notifHide () {
  return {
    type: constants.APP_NOTIF_HIDE
  }
}

// Loading actions
export function setLoading (status) {
  return {
    type: constants.APP_SET_LOADING,
    payload: status
  }
}
