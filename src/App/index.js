import React from 'react'

import Cockpit from './Cockpit'
import FriendsList from './FriendsList'

const style = {
  display: 'flex',
  maxWidth: '90%',
  margin: 'auto',
}

const uid = () => (`${(new Date()).getTime()}`)

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      messageValue: '',
      friend: '',
      allMessages: {},
      allFriends: [],
    }

    window.addEventListener('resize', () => {
      this.setState({})
    })
  }

  onChangeMessage = event => {
    this.setState(
      {
        messageValue: event.target.value,
      },
    )
  }

  onSubmitMessage = event => {
    event.preventDefault()
    this.dislayNewMessage(this.state.messageValue, 'me', this.state.friend)
    this.inputRef.focus()
  }

  onClickFriend = (event, friendId) => {
    this.setState(
      {
        friend: friendId,
      },
    )
    this.inputRef.focus()
  }

  onAddNewFriend = () => {
    const newFriendName = `Jack.${this.state.allFriends.length}`
    const idOfFriend = uid()

    this.setState(state => ({
      friend: idOfFriend,
      allFriends: [
        ...state.allFriends,
        {
          id: idOfFriend,
          friendName: newFriendName,
        },
      ],
    }))
    this.inputRef.focus()
  }

  getChattingList = () => {
    const chattingList = this.state.allMessages[this.state.friend]
    if (typeof chattingList !== 'undefined') {
      return chattingList
    }

    return []
  }

  refOfInput = input => {
    this.inputRef = input
    this.inputRef.focus()
  }

  receiveMessageFromFriend = message => {
    this.dislayNewMessage(message, this.state.friend, this.state.friend)
  }

  addMessageToChattingList = (newMessage, speaker) => {
    const messageElement = {
      id: uid(),
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
      this.setState(state => ({
        allMessages: {
          ...state.allMessages,
          [to]: this.addMessageToChattingList(
            message,
            speaker,
          ),
        },
        messageValue: (speaker === 'me' ? '' : this.state.messageValue),
      }),
      () => {
        if (speaker === 'me') {
          setTimeout(this.receiveMessageFromFriend, 1000, 'Nice day.')
        }
      })
    }
  }

  render() {
    return (
      <div style={{ ...style, height: (document.documentElement.clientHeight * 0.9) }}>
        <FriendsList
          onAddNewFriend={this.onAddNewFriend}
          onClickFriend={this.onClickFriend}
          friendsList={this.state.allFriends}
        />
        <Cockpit
          messagesWithAFriend={this.getChattingList()}
          messageValue={this.state.messageValue}
          onChangeMessage={this.onChangeMessage}
          onSubmitMessage={this.onSubmitMessage}
          refOfInput={this.refOfInput}
        />
      </div>
    )
  }
}

export default App
