import React from 'react'
import PropTypes from 'prop-types'

const MessageBar = props => {
  const style = {
    color: (props.speaker === 'me' ? 'blue' : 'purple'),
    fontsize: '32px',
    display: 'flex',
    justifyContent: (props.speaker === 'me' ? 'flex-end' : 'flex-start'),
  }

  return (
    <div style={style}>
      {props.speaker} : {props.displayMessage}
    </div>
  )
}

MessageBar.propTypes = {
  displayMessage: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
}

export default MessageBar
