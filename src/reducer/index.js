import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import cockpit from './cockpit'
import webController from './webController'

const reducer = combineReducers({
  cockpit,
  routerReducer,
  webController,
})

export default reducer
