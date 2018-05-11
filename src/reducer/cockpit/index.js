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
          [action.payload.to]: {
            ...state.allFriends[action.payload.to],
            allMessages: addNewMessage(
              action.payload.message,
              action.payload.speaker,
              state.allFriends[action.payload.to].allMessages,
            ),
          },
        },
        message: (action.payload.speaker === 'me' ? '' : state.messageValue),
      })

    case actions.FIND_FRIEND:
      return ({
        ...state,
        friend: action.payload.uid,
        allFriends: {
          ...state.allFriends,
          [action.payload.uid]: {
            friendName: action.payload.friend,
            allMessages: [],
          },
        },
      })

    default:
      return state
  }
}

export default cockpit
