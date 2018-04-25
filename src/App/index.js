import React from 'react'

import Cockpit from './Cockpit'
import Conversations from './Conversations'
import FriendsList from './FriendsList'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      messageValue: '',
      friend: '',
      allMessages: {},
      allFriends: [],
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
    this.dislayNewMessage(this.state.messageValue, 'me', this.state.friend)
  }

  onClickFriend = event => {
    this.setState(
      {
        friend: event.target.textContent,
      },
    )
  }

  onAddNewFriend = () => {
    const newFriendName = `Jack.${this.state.allFriends.length}`

    this.setState(
      {
        friend: newFriendName,
        allFriends: [
          ...this.state.allFriends,
          {
            id: `${(new Date()).getTime()}`,
            friendName: newFriendName,
          },
        ],
      },
    )
  }

  getChattingList = () => {
    const chattingList = this.state.allMessages[this.state.friend]
    if (typeof chattingList !== 'undefined') {
      return chattingList
    }

    return []
  }

  receiveMessageFromFriend = message => {
    this.dislayNewMessage(message, this.state.friend, this.state.friend)
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

  validateProperty = property => (
    typeof property !== 'undefined' && property !== ''
  )

  dislayNewMessage = (message, speaker, to) => {
    if (this.validateProperty(message) &&
        this.validateProperty(to) &&
        this.validateProperty(speaker)) {
      this.setState(
        {
          allMessages: {
            ...this.state.allMessages,
            [to]: this.addMessageToChattingList(
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
        friendsList={this.state.allFriends}
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
