import * as Actions from '../actions'
import { uid } from '../utils'

const initializeState = () => ({
  messageValue: '',
  friend: 'Me',
  allFriends: {
    Me: {
      friendName: 'Me',
      allMessages: [],
    },
  },
})

const addNewMessage = (newMessage, speaker, chatting) => {
  const messageElement = {
    id: uid(),
    content: newMessage,
    speaker,
  }

  if (typeof chatting !== 'undefined') {
    return [...chatting, messageElement]
  }

  return [messageElement]
}

const updateStateToSendMessage = (state, newMessage, speaker, to) => ({
  ...state,
  allFriends: {
    ...state.allFriends,
    [state.friend]: {
      friendName: state.allFriends[to].friendName,
      allMessages: addNewMessage(
        newMessage,
        speaker,
        state.allFriends[to].allMessages,
      ),
    },
  },
  messageValue: (speaker === 'me' ? '' : state.messageValue),
})

const reducerCockpit = (state = {}, action) => {
  switch (action.type) {
    case Actions.INIT:
      return initializeState()
    case Actions.SEND_MESSAGE:
      return updateStateToSendMessage(
        state,
        action.payload.message,
        action.payload.speaker,
        action.payload.to,
      )
    default:
      return state
  }
}

export default reducerCockpit
