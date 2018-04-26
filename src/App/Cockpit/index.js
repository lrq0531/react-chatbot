import React from 'react'
import PropTypes from 'prop-types'

import EditMessage from './EditMessage'
import SendMessage from './SendMessage'

const Cockpit = props => (
  <form onSubmit={props.onSubmitMessage}>
    <EditMessage
      messageValue={props.messageValue}
      onChangeMessage={props.onChangeMessage}
      refOfInput={props.refOfInput}
    />
    <SendMessage />
  </form>
)

Cockpit.propTypes = {
  messageValue: PropTypes.string.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onSubmitMessage: PropTypes.func.isRequired,
  refOfInput: PropTypes.func.isRequired,
}

export default Cockpit
