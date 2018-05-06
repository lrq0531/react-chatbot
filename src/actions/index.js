export const INIT = 'APP/INIT'
export const ADD_FREIND = 'FRIEND/ADD_FREIND'
export const FIND_FREIND = 'FRIEND/FIND_FREIND'
export const CHOOSE_FREIND = 'FRIEND/CHOOSE_FREIND'
export const SEND_MESSAGE = 'COCKPIT/SEND_MESSAGE'
export const RECEIVE_MESSAGE = 'COCKPIT/RECEIVE_MESSAGE'
export const TYPE_MESSAGE = 'COCKPIT/TYPE_MESSAGE'

export const init = () => ({
  type: INIT,
})

const addFriend = () => ({
  type: ADD_FREIND,
})

const findFriend = name => ({
  type: FIND_FREIND,
  name,
})

const chooseFriend = id => ({
  type: CHOOSE_FREIND,
  id,
})

export const sendMessage = (message, speaker, to) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    speaker,
    to,
  },
})

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message,
})

const typeMessage = message => ({
  type: TYPE_MESSAGE,
  message,
})
