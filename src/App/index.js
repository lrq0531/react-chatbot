import React from 'react';

import Cockpit from './Cockpit'
import Conversations from './Conversations'
import FriendsList from './FriendsList'

class App extends React.Component {

  render = () => (
    <div>
      <FriendsList />
      <Conversations />
      <Cockpit />
    </div>
  )
}


export default App;
