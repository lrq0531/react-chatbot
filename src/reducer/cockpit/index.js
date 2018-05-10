import * as actions from './actions'
import { addNewMessage } from './cockpitOperations'
import { initCockpit } from './initState'

const cockpit = (state = initCockpit, action) => {
  switch (action.type) {
    case actions.TYPE_MESSAGE:
      return ({
        ...state,
        message: action.payload.message,
      })
    case actions.SEND_MESSAGE:
      return ({
        ...state,
        allFriends: {
          ...state.allFriends,
          [state.friend]: {
            friendName: state.allFriends[action.payload.to].friendName,
            allMessages: addNewMessage(
              action.payload.message,
              action.payload.speaker,
              state.allFriends[action.payload.to].allMessages,
            ),
          },
        },
        message: (action.payload.speaker === 'me' ? '' : state.messageValue),
      })
    default:
      return state
  }
}

export default cockpit
