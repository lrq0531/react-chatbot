import React from 'react'
import PropTypes from 'prop-types'

import EditMessage from './EditMessage'
import SendMessage from './SendMessage'

const Cockpit = props => (
  <div>
    <EditMessage
      messageValue={props.messageValue}
      onChangeMessage={props.onChangeMessage}
      clearInputAfterEnter={props.clearInputAfterEnter}
    />
    <SendMessage
      onClickSendMessage={props.onClickSendMessage}
    />
  </div>
)

Cockpit.propTypes = {
  messageValue: PropTypes.string.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onClickSendMessage: PropTypes.func.isRequired,
  clearInputAfterEnter: PropTypes.func.isRequired,
}

export default Cockpit
