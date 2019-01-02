import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { userIsAuthenticated, userIsNotAuthenticated } from './auth'

import Landing from '../pages/Landing/Loadable'

const Dashboard = () => {
  return (
    <div>
      Dashboard
    </div>
  )
}

const LandingPage = userIsNotAuthenticated(Landing)
const DashboardPage = userIsAuthenticated(Dashboard)

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  )
}

export default Routes
