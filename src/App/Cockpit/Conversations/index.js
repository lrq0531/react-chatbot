import React from 'react'
import PropTypes from 'prop-types'

import MessageBar from './MessageBar'

const style = {
  flex: 1,
  overflowY: 'auto',
  marginLeft: '10px',
}

const Conversations = props => (
  <div style={style}>
    {props.messagesWithAFriend.map(message => (
      <MessageBar
        key={message.id}
        displayMessage={message.content}
        speaker={message.speaker}
      />
    ))}
  </div>
)

Conversations.propTypes = {
  messagesWithAFriend: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
  })).isRequired,
}

export default Conversations
