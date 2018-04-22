import React from 'react'
import PropTypes from 'prop-types'

const fontColor = (speaker) => {
  if (speaker === 'me') {
    return 'blue'
  }
  else {
    return 'purple'
  }
}

const MessageBar = props => (
  <div>
    <font size='6' color={fontColor(props.speaker)}>
      {props.speaker} : {props.displayMessage}
    </font>
  </div>
)

MessageBar.propTypes = {
  displayMessage : PropTypes.string.isRequired,
  speaker : PropTypes.string.isRequired,
}

export default MessageBar
