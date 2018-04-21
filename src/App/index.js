import React from 'react';

import Cockpit from './Cockpit'
import Conversations from './Conversations'
import FriendsList from './FriendsList'

class App extends React.Component {

  constructor( props ) {
    super(props)
    this.state = {
      messageValue : 'Start chatting',
      myDisplayMessages : [],
      actionType : ''
    }
  }

  onChangeMessage = (event) => {
    this.setState(
      {
        ...this.state,
        messageValue : event.target.value,
        actionType : 'typing',
      }
    )
  }

  onClickSendMessage = () => {
    const newMessageFromMe = this.state.messageValue
    this.setState(
      {
        ...this.state,
        messageValue : '',
        actionType : 'confirmed',
        myDisplayMessages : [...this.state.myDisplayMessages, newMessageFromMe]
      }
    )
  }

  clearInputAfterEnter = (event) => {
    if (event.key === 'Enter') {
      this.onClickSendMessage()
    }
  }

  render = () => (
    <div>
      <FriendsList />
      <Conversations
        myDisplayMessages = {this.state.myDisplayMessages}
        actionType = {this.state.actionType}
      />
      <Cockpit
        messageValue = {this.state.messageValue}
        onChangeMessage = {this.onChangeMessage}
        onClickSendMessage = {this.onClickSendMessage}
        clearInputAfterEnter = {this.clearInputAfterEnter}
      />
    </div>
  )
}

export default App;
