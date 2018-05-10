import React from 'react'
import PropTypes from 'prop-types'

import WriteMessage from './WriteMessage'
import Conversations from './Conversations'

const style = {
  flex: 12,
  display: 'flex',
  flexDirection: 'column',
}

const Cockpit = props => (
  <div style={style}>
    <Conversations
      messagesWithAFriend={props.messagesWithAFriend}
    />
    <WriteMessage refOfInput={props.refOfInput} />
  </div>
)

Cockpit.propTypes = {
  refOfInput: PropTypes.func.isRequired,
  messagesWithAFriend: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
  })).isRequired,
}

export default Cockpit
