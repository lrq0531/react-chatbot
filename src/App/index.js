import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Cockpit from './Cockpit'
import FriendsList from './FriendsList'
import FindFriend from './FriendsList/FindFriend'
import * as allActions from '../actions'

const uid = () => (`${(new Date()).getTime()}`)

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      messageValue: '',
      friend: 'Me',
      allFriends: {
        Me: {
          friendName: 'Me',
          allMessages: [],
        },
      },
    }
    const { fireActions } = this.props
    fireActions.init()

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
    const { fireActions, friend } = this.props
    fireActions.sendMessage('temporary message', 'me', friend)
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

  getChattingList = () => {
    const { friend, allFriends } = this.props
    if (typeof friend !== 'undefined' && typeof allFriends !== 'undefined') {
      const friendInfo = allFriends[friend]
      if (typeof friendInfo !== 'undefined') {
        return friendInfo.allMessages
      }
    }

    return []
  }

  addNewFriend = newFriendName => {
    const idOfFriend = uid()

    this.setState(state => ({
      friend: idOfFriend,
      allFriends: {
        ...state.allFriends,
        [idOfFriend]: {
          friendName: newFriendName,
          allMessages: [],
        },
      },
    }))
    this.inputRef.focus()
  }

  findFriend = () => {
    /* test codes */
    this.popDialogue = true
    this.setState({})
    this.inputRef.focus()
  }

  refOfInput = input => {
    this.inputRef = input
    // this.inputRef.focus()
  }

  receiveMessageFromFriend = message => {
    const speakerName = this.state.allFriends[this.state.friend].friendName
    this.dislayNewMessage(message, speakerName, this.state.friend)
  }

  addMessageToChattingList = (newMessage, speaker) => {
    const messageElement = {
      id: uid(),
      content: newMessage,
      speaker,
    }

    const chatting = this.state.allFriends[this.state.friend].allMessages
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
        allFriends: {
          ...state.allFriends,
          [to]: {
            friendName: state.allFriends[to].friendName,
            allMessages: this.addMessageToChattingList(
              message,
              speaker,
            ),
          },
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

  find = event => {
    event.preventDefault()
    this.popDialogue = false
    const friendName = event.target[0].value
    this.addNewFriend(friendName)
  }

  render() {
    const style = {
      display: 'flex',
      maxWidth: '90%',
      margin: 'auto',
      zIndex: -1,
    }

    return (
      <div style={{ ...style, height: (document.documentElement.clientHeight * 0.9) }}>
        <FriendsList
          onAddNewFriend={this.findFriend}
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
        {this.popDialogue
          ? <FindFriend
            find={this.find}
          />
          : ''
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  friend: state.reducerCockpit.friend,
  allFriends: state.reducerCockpit.allFriends,
})

const mapDispatchToProps = dispatch => ({
  fireActions: bindActionCreators(allActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
