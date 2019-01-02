import { all, takeLatest, put, call } from 'redux-saga/effects'

import { signup, login, auth } from '../api'
import * as actions from '../actions'
import * as constants from '../common/constants'
import * as errs from '../common/_errors'

function* handleSignup ({ type, payload }) {
  yield put(actions.setLoading(true))
  
  try {
    const res = yield call(signup, payload)
    
    if (res.data.success) {
      yield put(actions.signupSuccess(res.data.data))
    } else {
      yield put(actions.signupFailure(res.data.errors))
    }
  } catch (err) {
    yield put(actions.errorShow([errs.REQUEST_ERROR]))
  }

  yield put(actions.setLoading(false))
}

function* handleLogin ({ type, payload }) {
  yield put(actions.setLoading(true))
  
  try {
    const res = yield call(login, payload)
    if (res.data.success) {
      yield put(actions.loginSuccess(res.data.data))
    } else {
      yield put(actions.loginFailure(res.data.errors))
    }
  } catch (err) {
    yield put(actions.errorShow([errs.REQUEST_ERROR]))
  }

  yield put(actions.setLoading(false))
}

function* handleAuth ({ type, payload }) {
  yield put(actions.setLoading(true))

  try {
    const res = yield call(auth)
    if (res.data.success) {
      yield put(actions.authSuccess(res.data.data))
    } else {
      yield put(actions.authFailure(res.data.errors))
    }
  } catch (err) {
    yield put(actions.errorShow([errs.REQUEST_ERROR]))
  }

  yield put(actions.setLoading(false))
}

export default function* () {
  yield all([
    takeLatest(constants.USER_SIGNUP_REQUEST, handleSignup),
    takeLatest(constants.USER_LOGIN_REQUEST, handleLogin),
    takeLatest(constants.USER_AUTH_REQUEST, handleAuth)
  ])
}
