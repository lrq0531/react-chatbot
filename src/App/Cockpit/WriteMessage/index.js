import React from 'react'
import PropTypes from 'prop-types'

import EditMessage from './EditMessage'
import SendMessage from './SendMessage'

const WriteMessage = props => (
  <form onSubmit={props.onSubmitMessage}>
    <EditMessage
      messageValue={props.messageValue}
      onChangeMessage={props.onChangeMessage}
      refOfInput={props.refOfInput}
    />
    <SendMessage />
  </form>
)

WriteMessage.propTypes = {
  messageValue: PropTypes.string.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onSubmitMessage: PropTypes.func.isRequired,
  refOfInput: PropTypes.func.isRequired,
}

export default WriteMessage
