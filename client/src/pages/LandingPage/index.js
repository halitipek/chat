import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import classNames from 'classnames'

import Signup from '../../containers/Signup'
import Login from '../../containers/Login'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: 32
  },
  logo: {
    textAlign: 'center',
    marginBottom: 20,
    '& img': {
      width: '50%',
      maxWidth: 320
    }
  },
  tabs: {
    background: '#35bdb2',
    color: '#fff'
  },
  hidden: {
    display: 'none'
  }
})

const LandingPage = ({ classes }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.logo}>
          <img src="/images/logo.png" alt="logo"/>
        </div>
        <Card className={classes.card}>
          <Tabs 
            className={classes.tabs} 
            fullWidth 
            value={activeTab} 
            onChange={(e, newValue) => setActiveTab(newValue)}
          >
            <Tab label="Login" />
            <Tab label="Sign up" />
          </Tabs>
          <div className={classNames(classes.content, { [classes.hidden]: activeTab === 1 })}>
            <Login />
          </div>
          <div className={classNames(classes.content, { [classes.hidden]: activeTab === 0 })}>
            <Signup />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default withStyles(styles)(LandingPage)
