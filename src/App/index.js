import React from 'react'

import Cockpit from './Cockpit'
import Conversations from './Conversations'
import FriendsList from './FriendsList'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.startChat = [
      {
        id: `${(new Date()).getTime()}`,
        content: '',
        speaker: '',
      },
    ]

    this.state = {
      messageValue: '',
      friend: 'Alex',
      allMessages: {},
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
    this.dislayNewMessage(this.state.messageValue, 'me')
  }

  onClickFriend = event => {
    this.setState(
      {
        friend: event.target.textContent,
      },
    )
  }

  onAddNewFriend = () => {
    this.setState(
      {
        friend: 'Bill.G',
      },
    )
  }

  getChattingList = () => {
    const chattingList = this.state.allMessages[this.state.friend]
    if (typeof chattingList !== 'undefined') {
      return chattingList
    }

    return this.startChat
  }

  receiveMessageFromFriend = message => {
    this.dislayNewMessage(message, this.state.friend)
  }

  clearInputAfterEnter = event => {
    if (event.key === 'Enter') {
      this.onClickSendMessage()
    } else if (event.key === 'Control') {
      this.receiveMessageFromFriend('Evolution.')
    }
  }

  addMessageToChattingList = (newMessage, speaker) => {
    const messageElement = {
      id: `${(new Date()).getTime()}`,
      content: newMessage,
      speaker,
    }

    const chatting = this.state.allMessages[this.state.friend]
    if (typeof chatting !== 'undefined') {
      return [...chatting, messageElement]
    }

    return [messageElement]
  }

  dislayNewMessage = (message, speaker) => {
    if (typeof message !== 'undefined' && message !== '') {
      this.setState(
        {
          allMessages: {
            ...this.state.allMessages,
            [this.state.friend]: this.addMessageToChattingList(
              message,
              speaker,
            ),
          },
          messageValue: (speaker === 'me' ? '' : this.state.messageValue),
        },
      )
    }
  }

  render = () => (
    <div>
      <FriendsList
        onAddNewFriend={this.onAddNewFriend}
        onClickFriend={this.onClickFriend}
      />
      <Conversations
        messagesWithAFriend={this.getChattingList()}
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
