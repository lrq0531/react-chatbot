export const ADD_FREIND = 'FRIEND/ADD_FREIND'
export const FIND_FREIND = 'FRIEND/FIND_FREIND'
export const CHOOSE_FREIND = 'FRIEND/CHOOSE_FREIND'
export const SEND_MESSAGE = 'COCKPIT/SEND_MESSAGE'
export const RECEIVE_MESSAGE = 'COCKPIT/RECEIVE_MESSAGE'
export const TYPE_MESSAGE = 'COCKPIT/TYPE_MESSAGE'

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

const sendMessage = () => ({
  type: SEND_MESSAGE,
})

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message,
})

const typeMessage = message => ({
  type: TYPE_MESSAGE,
  message,
})
