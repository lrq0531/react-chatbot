import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MessageBar from './MessageBar'

const style = {
  flex: 1,
  overflowY: 'auto',
  marginLeft: '10px',
}

class Conversations extends React.Component {
  /* Setting scrollTop should be done after render method, to use the decided scrollTop value.
  Otherwise, the value will be overwrite by render() */
  componentDidUpdate() {
    if (typeof this.refOfCom !== 'undefined') {
      this.refOfCom.scrollTop += 10000
    }
  }

  refOfConversation = ref => {
    this.refOfCom = ref
  }

  render() {
    const { messages } = this.props

    return (
      <div ref={this.refOfConversation} style={style}>
        {typeof messages !== 'undefined' ? messages.map(message => (
          <MessageBar
            key={message.id}
            displayMessage={message.content}
            speaker={message.speaker}
          />
        )) : ''}
      </div>
    )
  }
}

Conversations.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
  })).isRequired,
}

const mapStateToProps = ({ cockpit }) => ({
  messages: cockpit.allFriends[cockpit.friend].allMessages,
})

export default connect(mapStateToProps, null)(Conversations)
