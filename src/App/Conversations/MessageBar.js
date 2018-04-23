import React from 'react'
import PropTypes from 'prop-types'

const MessageBar = props => {
  const style = {
    color: (props.speaker === 'me' ? 'blue' : 'purple'),
    fontsize: '32px',
  }

  return (
    <p style={style}>
      {props.speaker} : {props.displayMessage}
    </p>
  )
}

MessageBar.propTypes = {
  displayMessage: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
}

export default MessageBar
