import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Cockpit from './Cockpit'
import FriendsList from './FriendsList'
import FindFriend from './FindFriend'
import uid from '../lib'

class App extends React.Component {
  constructor(props) {
    super(props)

    window.addEventListener('resize', () => {
      this.setState({})
    })
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
    const friendInfo = allFriends[friend]
    if (typeof friendInfo !== 'undefined') {
      return friendInfo.allMessages
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

  validateProperty = property => (
    typeof property !== 'undefined' && property !== ''
  )

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
          friendsList={this.props.allFriends}
        />
        <Cockpit
          messagesWithAFriend={this.getChattingList()}
          refOfInput={this.refOfInput}
        />
        {this.popDialogue
          ? <FindFriend />
          : ''
        }
      </div>
    )
  }
}

App.propTypes = {
  allFriends: PropTypes.object.isRequired,
  friend: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  friend: state.cockpit.friend,
  allFriends: state.cockpit.allFriends,
})

export default connect(mapStateToProps, null)(App)
