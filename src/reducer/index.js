import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import cockpit from './cockpit'
import webController from './webController'
import componentRefs from './componentRefs'

const reducer = combineReducers({
  cockpit,
  routerReducer,
  webController,
  componentRefs,
})

export default reducer
