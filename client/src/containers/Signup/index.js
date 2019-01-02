import React from 'react'
import { connect } from 'react-redux'

import SignupForm from '../../components/SignupForm'
import { signupRequest } from '../../actions/user-actions'

const Signup = ({ signupRequest, user }) => {
  return (
    <SignupForm 
      handleSubmit={signupRequest}
      errors={user.errors}
    />
  )
}

export default connect(
  ({ user }) => ({ user }),
  { signupRequest }
)(Signup)
