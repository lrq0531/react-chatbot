import React from 'react'
import PropTypes from 'prop-types'

import EditMessage from './EditMessage'
import SendMessage from './SendMessage'

const Cockpit = props => (
  <form onSubmit={props.sendMessage}>
    <EditMessage
      messageValue={props.messageValue}
      onChangeMessage={props.onChangeMessage}
      inputRef={props.inputRef}
    />
    <SendMessage />
  </form>
)

Cockpit.propTypes = {
  messageValue: PropTypes.string.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  inputRef: PropTypes.func.isRequired,
}

export default Cockpit
