import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'

import MessageBar from './MessageBar'

const Conversations = props => (
  <div>
    {
      map(props.messages, message => (
        <MessageBar
          key={message.id}
          displayMessage={message.content}
          speaker={message.speaker}
        />
      ))
    }
  </div>
)

Conversations.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
  })).isRequired,
}

export default Conversations
