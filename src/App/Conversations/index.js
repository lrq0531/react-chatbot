import React from 'react'
import PropTypes from 'prop-types'

import MessageBar from './MessageBar'

function newMessage(message, speaker, key) {
  if (typeof message !== 'undefined' && message !== '') {
    return (
      <MessageBar
        key={key}
        displayMessage={message}
        speaker={speaker}
      />
    )
  }

  return ''
}

class Conversations extends React.Component {
  constructor(props) {
    super(props)

    this.addMessageToConversation = this.addMessageToConversation.bind(this)
    this.conversionsWithAFreind = {}
  }

  shouldComponentUpdate({ actionType }) {
    return actionType === 'confirmed'
  }

  addMessageToConversation(message, friend, speaker) {
    const withAFriend = this.conversionsWithAFreind[this.props.friend]
    if (typeof withAFriend !== 'undefined') {
      withAFriend.push(newMessage(message, speaker, withAFriend.length))
      return withAFriend
    }

    this.conversionsWithAFreind[this.props.friend] = [newMessage(message, speaker, 0)]
    return this.conversionsWithAFreind[this.props.friend]
  }

  render = () => (
    <div>
      {
        this.addMessageToConversation(
          this.props.newMessage,
          this.props.friend,
          this.props.speaker,
        )
      }
    </div>
  )
}

Conversations.propTypes = {
  newMessage: PropTypes.string.isRequired,
  actionType: PropTypes.string.isRequired,
  friend: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
}

export default Conversations
