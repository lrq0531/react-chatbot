import { mapValues, concat, map } from 'lodash'

import uid from '../../lib'

export const addNewMessage = (newMessage, speaker, chatting) => {
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

export const concatenateMessages =
(allFriends, messages, currentChatter) => mapValues(allFriends, (value, key) => {
  const newMessages = messages[key]
  if (typeof newMessages !== 'undefined') {
    return ({
      ...value,
      allMessages: concat(typeof value.allMessages !== 'undefined' ? value.allMessages : [],
        map(newMessages, (message, index) => ({
          id: `${uid()}-${index}`,
          content: message,
          speaker: value.friendName,
        }))),
      online: true,
      unread: currentChatter === key ? 0 : newMessages.length + (typeof value.unread !== 'undefined' ? value.unread : 0),
    })
  }
  return value
})
