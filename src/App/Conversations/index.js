import React from 'react'
import PropTypes from 'prop-types'
import MessageBar from './MessageBar'

class Conversations extends React.Component {

  conversionsWithAFreind = {}

  constructor(props) {
    super(props)
    this.props = props
    this.addMessageToConversation = this.addMessageToConversation.bind(this)
    this.newMessage = this.newMessage.bind(this)
  }

  shouldComponentUpdate({actionType}) {
    if (actionType !== 'confirmed') {
      return false;
    }
    else {
      return true;
    }
  }

  newMessage(message, speaker, key){
    if (typeof message !== 'undefined' && message !== '') {
      return (
        <MessageBar
          key = {key}
          displayMessage = {message}
          speaker = {speaker}
        />
      )
    }
    else {
      return ''
    }
  }

  addMessageToConversation(message, friend, speaker) {
    const withAFriend = this.conversionsWithAFreind[this.props.friend]
    if (typeof withAFriend !== 'undefined') {
      withAFriend.push(this.newMessage(message, speaker, withAFriend.length))
      return withAFriend
    }
    else {
      this.conversionsWithAFreind[this.props.friend] = [this.newMessage(message, speaker, 0)]
      return this.conversionsWithAFreind[this.props.friend]
    }
  }

  render = () => (
    <div>
      {
        this.addMessageToConversation(
          this.props.newMessage,
          this.props.friend,
          this.props.speaker
        )
      }
    </div>
  )
}

Conversations.propTypes = {
  newMessage : PropTypes.string.isRequired,
  actionType : PropTypes.string.isRequired,
  friend : PropTypes.string.isRequired,
  speaker : PropTypes.string.isRequired,
}

export default Conversations
