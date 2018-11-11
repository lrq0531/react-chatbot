import { put, call, take, fork } from 'redux-saga/effects'

import { onlineFriends, newMessages, UPDATE_ONLINE_FRIENDS, UPDATE_MESSAGE } from './actions'

const fetchOnlineFriends = chatterId => fetch(`http://swift-parrot-58.localtunnel.me/onlineFriends?chatterId=${chatterId}`)
//const fetchOnlineFriends = chatterId => fetch(`http://localhost:8090/onlineFriends?chatterId=${chatterId}`)
  .then(response => response.json())
  .then(data => data)

function* updateOnlineFriends(chatterId) {
  const friends = yield call(fetchOnlineFriends, chatterId)
  yield put(onlineFriends(friends))
}

export function* updateOnlineFriendsListener() {
  while (true) {
    const { payload } = yield take(UPDATE_ONLINE_FRIENDS)
    yield fork(updateOnlineFriends, payload.chatterId)
  }
}

//const fetchMessages = chatterId => fetch(`http://localhost:8090/messages?chatterId=${chatterId}`)
const fetchMessages = chatterId => fetch(`http://swift-parrot-58.localtunnel.me/messages?chatterId=${chatterId}`)
  .then(response => response.json())
  .then(data => data)

function* updateMessages(chatterId) {
  const messages = yield call(fetchMessages, chatterId)
  yield put(newMessages(messages))
}

export function* updateMessagesListener() {
  while (true) {
    const { payload } = yield take(UPDATE_MESSAGE)
    yield fork(updateMessages, payload.chatterId)
  }
}
