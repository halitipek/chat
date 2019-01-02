import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, .7)',
    zIndex: 999999999
  }
}

const Loading = ({ classes }) => {
  return (
    <div className={classes.root}>
      <CircularProgress size={70} />
    </div>
  )
}

export default withStyles(styles)(Loading)
