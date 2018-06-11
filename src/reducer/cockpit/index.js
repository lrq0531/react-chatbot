import * as actions from './actions'
import { addNewMessage, concatenateMessages } from './cockpitOperations'
import { initialState } from './initialState'

const cockpit = (state = initialState, { payload, type } = {}) => {
  switch (type) {
    case actions.TYPE_MESSAGE:
      return ({
        ...state,
        message: payload.message,
      })

    case actions.SEND_MESSAGE:
      return ({
        ...state,
        allFriends: {
          ...state.allFriends,
          [payload.to]: {
            ...state.allFriends[payload.to],
            allMessages: addNewMessage(
              payload.message,
              payload.speaker,
              state.allFriends[payload.to].allMessages,
            ),
          },
        },
        message: (payload.speaker === 'me' ? '' : state.messageValue),
      })

    case actions.FIND_FRIEND:
      return ({
        ...state,
        friend: payload.uid,
        allFriends: {
          ...state.allFriends,
          [payload.uid]: {
            friendName: payload.friend,
            allMessages: [],
            online: true,
          },
        },
      })

    case actions.PICK_FRIEND:
      return ({
        ...state,
        friend: payload.uid,
        allFriends: {
          ...state.allFriends,
          [payload.uid]: {
            ...state.allFriends[payload.uid],
            unread: 0,
          },
        },
      })

    case actions.ONLINE_FRIENDS:
      return ({
        ...state,
        allFriends: {
          ...state.allFriends,
          [payload.onlineFriends[0].id]: {
            ...state.allFriends[payload.onlineFriends[0].id],
            friendName: payload.onlineFriends[0].name,
            online: payload.onlineFriends[0].online,
          },
          [payload.onlineFriends[1].id]: {
            ...state.allFriends[payload.onlineFriends[1].id],
            friendName: payload.onlineFriends[1].name,
            online: payload.onlineFriends[1].online,
          },
          [payload.onlineFriends[2].id]: {
            ...state.allFriends[payload.onlineFriends[2].id],
            friendName: payload.onlineFriends[2].name,
            online: payload.onlineFriends[2].online,
          },
        },
      })

    case actions.NEW_MESSAGES:
      return ({
        ...state,
        allFriends: concatenateMessages(state.allFriends, payload.messages, state.friend),
      })
    default:
      return state
  }
}

export default cockpit
