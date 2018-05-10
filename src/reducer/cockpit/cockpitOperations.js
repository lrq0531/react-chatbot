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
