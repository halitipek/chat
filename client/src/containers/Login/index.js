import React from 'react'
import { connect } from 'react-redux'

import LoginForm from '../../components/LoginForm'
import { loginRequest } from '../../actions/user-actions'

const Login = ({ loginRequest, user }) => {
  return (
    <LoginForm 
      handleSubmit={loginRequest}
      errors={user.errors}
    />
  )
}

export default connect(
  ({ user }) => ({ user }),
  { loginRequest }
)(Login)
