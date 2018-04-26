import React from 'react'
import PropTypes from 'prop-types'

import WriteMessage from './WriteMessage'
import Conversations from './Conversations'

const Cockpit = props => (
  <div>
    <Conversations
      messagesWithAFriend={props.messagesWithAFriend}
    />
    <WriteMessage
      messageValue={props.messageValue}
      onChangeMessage={props.onChangeMessage}
      onSubmitMessage={props.onSubmitMessage}
      refOfInput={props.refOfInput}
    />
  </div>
)

Cockpit.propTypes = {
  messageValue: PropTypes.string.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onSubmitMessage: PropTypes.func.isRequired,
  refOfInput: PropTypes.func.isRequired,
  messagesWithAFriend: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
  })).isRequired,
}

export default Cockpit
