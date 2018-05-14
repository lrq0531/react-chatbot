import { push, goBack } from 'react-router-redux'

import uid from '../../lib'

export const SEND_MESSAGE = 'COCKPIT/SEND_MESSAGE'
export const TYPE_MESSAGE = 'COCKPIT/TYPE_MESSAGE'
export const FIND_FRIEND = 'COCKPIT/FIND_FRIEND'
export const PICK_FRIEND = 'COCKPIT/PICK_FRIEND'

export const sendMessage = (message, speaker, to) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    speaker,
    to,
  },
})

export const typeMessage = message => ({
  type: TYPE_MESSAGE,
  payload: {
    message,
  },
})

export const findFriend = friend => ({
  type: FIND_FRIEND,
  payload: {
    friend,
    uid: uid(),
  },
})

export const pickFriend = friendId => ({
  type: PICK_FRIEND,
  payload: {
    uid: friendId,
  },
})

export const toFindFriend = () => push('/find-friend')

export const leaveFindFriend = () => goBack()
