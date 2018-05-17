import React from 'react'

import WriteMessage from './WriteMessage'
import Conversations from './Conversations'

const style = {
  flex: 12,
  display: 'flex',
  flexDirection: 'column',
}

const Cockpit = () => (
  <div style={style}>
    <Conversations />
    <WriteMessage />
  </div>
)

export default Cockpit
