export const SEND_MESSAGE = 'COCKPIT/SEND_MESSAGE'
export const TYPE_MESSAGE = 'COCKPIT/TYPE_MESSAGE'

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
