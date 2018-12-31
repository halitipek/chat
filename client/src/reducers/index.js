import { combineReducers } from 'redux'

import userReducer from './user-reducer'
import themeReducer from './theme-reducer'

const RootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer
})

export default RootReducer
