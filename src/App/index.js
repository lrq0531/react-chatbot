import React from 'react'

import Cockpit from './Cockpit'
import Conversations from './Conversations'
import FriendsList from './FriendsList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messageValue: 'Start chatting',
      messageToDisplay: '',
      friend: 'Alex',
      speaker: '',
    }
  }

  onChangeMessage = event => {
    this.setState(
      {
        messageValue: event.target.value,
      },
    )
  }

  onClickSendMessage = () => {
    this.setState(
      {
        messageValue: '',
        messageToDisplay: this.state.messageValue,
        speaker: 'me',
      },
    )
  }

  onClickFriend = event => {
    this.setState(
      {
        friend: event.target.textContent,
        messageToDisplay: '',
      },
    )
  }

  onAddNewFriend = () => {
    this.setState(
      {
        friend: 'Bill.G',
        messageToDisplay: '',
      },
    )
  }

  receiveMessageFromFriend = message => {
    this.setState(
      {
        messageToDisplay: message,
        speaker: this.state.friend,
      },
    )
  }

  clearInputAfterEnter = event => {
    if (event.key === 'Enter') {
      this.onClickSendMessage()
    } else if (event.key === 'Control') {
      this.receiveMessageFromFriend('Such a fun, React.')
    }
  }

  render = () => (
    <div>
      <FriendsList
        onAddNewFriend={this.onAddNewFriend}
        onClickFriend={this.onClickFriend}
      />
      <Conversations
        newMessage={this.state.messageToDisplay}
        friend={this.state.friend}
        speaker={this.state.speaker}
      />
      <Cockpit
        messageValue={this.state.messageValue}
        onChangeMessage={this.onChangeMessage}
        onClickSendMessage={this.onClickSendMessage}
        clearInputAfterEnter={this.clearInputAfterEnter}
      />
    </div>
  )
}

export default App;
