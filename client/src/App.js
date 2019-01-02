import React from 'react'
import { connect } from 'react-redux'
import Loading from './components/Loading'
import Routes from './routes'

const App = ({ app }) => {
  return (
    <div>
      {
        app.loading && <Loading />
      }
      <Routes />
    </div>
  )
}

export default connect(
  ({ app }) => ({ app })
)(App)
