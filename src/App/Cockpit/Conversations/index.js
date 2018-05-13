import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MessageBar from './MessageBar'

const style = {
  flex: 1,
  overflowY: 'auto',
  marginLeft: '10px',
}

const Conversations = ({ messages }) => (
  <div style={style}>
    {messages.map(message => (
      <MessageBar
        key={message.id}
        displayMessage={message.content}
        speaker={message.speaker}
      />
    ))}
  </div>
)

Conversations.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
  })).isRequired,
}

const mapStateToProps = ({ cockpit }) => ({
  messages: cockpit.allFriends[cockpit.friend].allMessages,
})

export default connect(mapStateToProps, null)(Conversations)
