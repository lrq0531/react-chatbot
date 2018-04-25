import React from 'react'
import { find } from 'lodash';

import Cockpit from './Cockpit'
import Conversations from './Conversations'
import FriendsList from './FriendsList'

const generateId = () => `${new Date().getTime()}`

const createNewFriend = name => ({
  id: generateId(),
  name,
});

class App extends React.Component {
  constructor(props) {
    super(props)

    const initialFriend = createNewFriend('Brian')

    this.state = {
      messageValue: '',
      friend: initialFriend,
      messages: [],
      friends: [initialFriend],
    }
  }

  onChangeMessage = event => {
    this.setState({
      messageValue: event.target.value,
    })
  }

  onClickFriend = (event, friendId) => {
    this.setState({
      friend: find(this.state.friends, o => o.id === friendId),
    })
    this.input.focus()
  }

  onAddNewFriend = () => {
    this.setState({
      friends: [
        ...this.state.friends,
        createNewFriend(`Jack.${this.state.friends.length}`),
      ],
    })
    this.input.focus()
  }

  getInputRef = input => {
    this.input = input;
  }

  addMessage = (content, speaker) => [
    ...this.state.messages,
    {
      id: generateId(),
      content,
      speaker,
    },
  ];

  sendMessage = e => {
    e.preventDefault();
    const content = this.state.messageValue

    if (content === '') return;

    this.setState({
      messages: this.addMessage(content, 'me'),
      messageValue: '',
    }, () => {
      this.setState({
        messages: this.addMessage(
          `I see you said: ${content}`,
          this.state.friend.name,
        ),
      })
    });
    this.input.focus();
  }

  render = () => {
    const styles = {
      container: {
        display: 'flex',
      },
      chat: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      },
    }

    return (
      <div style={styles.container}>
        <FriendsList
          onAddNewFriend={this.onAddNewFriend}
          onClickFriend={this.onClickFriend}
          friends={this.state.friends}
        />
        <div style={styles.chat}>
          <Conversations
            messages={this.state.messages}
          />
          <Cockpit
            messageValue={this.state.messageValue}
            onChangeMessage={this.onChangeMessage}
            sendMessage={this.sendMessage}
            inputRef={this.getInputRef}
          />
        </div>
      </div>
    )
  }
}

export default App;
