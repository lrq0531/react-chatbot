import { put, call, take, fork } from 'redux-saga/effects'

import { onlineFriends, UPDATE_ONLINE_FRIENDS } from './actions'

const fetchOnlineFriends = chatterId => fetch(`http://localhost:8090/onlineFriends?chatterId=${chatterId}`)
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
