import React from 'react'
import PropTypes from 'prop-types'

const MessageBar = progs => (
  <p><font size='6' color='blue'> {progs.displayMessage} </font></p>
)

MessageBar.propTypes = {
  displayMessage : PropTypes.string.isRequired,
}

export default MessageBar
