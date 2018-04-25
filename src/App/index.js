import React from 'react'
import { find } from 'lodash';

import Cockpit from './Cockpit'
import Conversations from './Conversations'
import FriendsList from './FriendsList'

const generateId = () => `${new Date().getTime()}`

const createNewFriend = friendName => ({
  id: generateId(),
  friendName,
});

class App extends React.Component {
  constructor(props) {
    super(props)

    const initialFriend = createNewFriend('Brian')

    this.state = {
      messageValue: '',
      friend: initialFriend,
      messages: [],
      allFriends: [initialFriend],
    }
  }

  onChangeMessage = event => {
    this.setState({
      messageValue: event.target.value,
    })
  }

  onClickFriend = (event, friendId) => {
    this.setState({
      friend: find(this.state.allFriends, o => o.id === friendId),
    })
  }

  onAddNewFriend = () => {
    this.setState({
      allFriends: [
        ...this.state.allFriends,
        createNewFriend(`Jack.${this.state.allFriends.length}`),
      ],
    })
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
          this.state.friend.friendName,
        ),
      })
    });
  }

  render = () => (
    <div>
      <FriendsList
        onAddNewFriend={this.onAddNewFriend}
        onClickFriend={this.onClickFriend}
        friendsList={this.state.allFriends}
      />
      <Conversations
        messages={this.state.messages}
      />
      <Cockpit
        messageValue={this.state.messageValue}
        onChangeMessage={this.onChangeMessage}
        sendMessage={this.sendMessage}
      />
    </div>
  )
}

export default App;
