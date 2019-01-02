import { combineReducers } from 'redux'

import userReducer from './user-reducer'
import themeReducer from './theme-reducer'
import appReducer from './app-reducer'

const RootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  app: appReducer
})

export default RootReducer
