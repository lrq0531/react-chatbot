import React from 'react';

import Cockpit from './Cockpit'
import Conversations from './Conversations'
import FriendsList from './FriendsList'

const App = () => (
  <div>
    <FriendsList/>
    <Conversations/>
    <Cockpit/>
  </div>
)

export default App;
