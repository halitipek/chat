import React from 'react'
import { Helmet } from 'react-helmet'

import ThemeProvider from './ThemeProvider'
import StoreProvider from './StoreProvider'

const Root = ({ children }) => {
  return (
    <StoreProvider>
      <Helmet>
        <title>Chat App</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </StoreProvider>
  )
}

export default Root
