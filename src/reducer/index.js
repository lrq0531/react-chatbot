import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { all, fork } from 'redux-saga/effects'

import cockpit from './cockpit'
import webController from './webController'
import componentRefs from './componentRefs'
import { updateOnlineFriendsListener, updateMessagesListener } from './cockpit/sagas'

export const reducer = combineReducers({
  cockpit,
  routerReducer,
  webController,
  componentRefs,
})

export function* sagaRoot() {
  yield all([
    fork(updateOnlineFriendsListener),
    fork(updateMessagesListener),
  ])
}
