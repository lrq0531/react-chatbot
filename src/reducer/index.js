import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import cockpit from './cockpit'

const reducer = combineReducers({
  cockpit,
  routerReducer,
})

export default reducer
