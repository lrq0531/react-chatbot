import React from 'react';
import PropTypes from 'prop-types'

import EditMessage from './EditMessage'
import SendMessage from './SendMessage'

// var ss = function() {
//   alert('ssss')
// }

const Cockpit = props => (
  <div>
    <EditMessage
      messageValue={props.messageValue}
      onChangeMessage={props.onChangeMessage}
    />
    <SendMessage
      onClickSendMessage = {props.onClickSendMessage}
    />
  </div>
)

Cockpit.propTypes = {
  messageValue : PropTypes.string.isRequired,
  onChangeMessage : PropTypes.func.isRequired,
  onClickSendMessage : PropTypes.func.isRequired,
}

export default Cockpit
